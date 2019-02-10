import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ApiService } from '../../service/api.service';
import { User } from '../../models/User';
import { Role } from '../../models/Role';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import {NgxPaginationModule} from 'ngx-pagination';

export interface ILogin {
  name:string;
  username: string;
  email:string;
  role:string;
  password: string;
}

@Component({
  selector: 'app-usersetting',
  templateUrl: './usersetting.component.html',
  styleUrls: ['./usersetting.component.scss'],
  providers: [MessageService, ConfirmationService,NgxPaginationModule]
})
export class UsersettingComponent implements OnInit {

  signupForm: FormGroup;
  validationMessages: any;
  error = '';
  loginModel:ILogin = {
    name:"",
    username:"",
    email:"",
    role:"",
    password:""
  }
  Users:any;
  p: number = 1;
  pageSize: number = 10;
  totalItems: number;
  returnUrl: any;
  constructor(private confirmationService: ConfirmationService, private route: ActivatedRoute, public router:Router, public formBuilder: FormBuilder,public api: ApiService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name:['',[Validators.required]],
      username:['', [Validators.required]],
      email:['',[Validators.required]],
      role:['',[Validators.required]],
      password:['', Validators.required],
      rememberme:[false]
    })
    this.validationMessages = {
      'name':[
        {'type':'required',message:'This field is Required'}
      ],
      'username': [
        {type: 'required', message: 'This field is Required'}
      ],
      'email':[
        {type:'required',message:'This field is Required'}
      ],
      'role':[
        {type:'required',message:'This field is Required'}
      ],
      'password': [
        {type: 'required', message: 'This field is Required'}
      ]
    };
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';

    this.getUser();
  }
  getUser(){
    this.api.getUser(1,10)
      .subscribe(
          data => {
            this.Users=data.content;
            this.totalItems = data.content.length;
            console.log('data',data.content);
            this.router.navigate(['/admin/usersetting']);
          },
          error => {
            console.log(error);
            console.log(error.error.message);
            this.error = "Invalid Credentials"
          });
  }
  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value =="");
  }

  onKeyPressLogin(event : any){
    if(event.key == "Enter"){
      this.createUser(this.signupForm);
    }
  }

  async createUser(signupForm:FormGroup) {
    if(signupForm.valid){
      console.log(signupForm.value);


      if(this.id){
        this.api.editUser({
          "id":this.id,
          "name":signupForm.value.name,
          "username":signupForm.value.username,
          "email":signupForm.value.email,
          "role":[signupForm.value.role],
          "password":signupForm.value.password
          })
          //.pipe(first())
          .subscribe(
              data => {
                this.id=false;
                this.router.navigate(['/admin/usersetting']);
              },
              error => {
                console.log(error);
                console.log(error.error.message);
                this.error = "Invalid Credentials"
              });
      }
      else{
        this.api.signup({
        "name":signupForm.value.name,
        "username":signupForm.value.username,
        "email":signupForm.value.email,
        "role":[signupForm.value.role],
        "password":signupForm.value.password
        })
        //.pipe(first())
        .subscribe(
            data => {
              this.router.navigate(['/admin/usersetting']);
            },
            error => {
              console.log(error);
              console.log(error.error.message);
              this.error = "Invalid Credentials"
            });
      }
    }
  }


  id:any;
  editRow(row){
    console.log('row',row);
    // this.menu = row;
    this.id=row.id;
    this.signupForm.controls['name'].setValue(row.name);
    this.signupForm.controls['username'].setValue(row.username);
    this.signupForm.controls['email'].setValue(row.email);
    this.signupForm.controls['role'].setValue(row.roles[0].name);
    // this.signupForm.controls['password'].setValue(row.password);
  }
  async deleteRow(row) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this record?',
      accept: async () => {
        // await this.api.deleteU(row.id)
        let saveResponse = await this.api.deleteU(row.id);
      }
    });
  }

}
