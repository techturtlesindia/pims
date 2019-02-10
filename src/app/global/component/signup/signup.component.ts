import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { ApiService } from '../../service/api.service';
import { User } from '../../models/User';
import { Role } from '../../models/Role';

export interface ILogin {
  name:string;
  username: string;
  email:string;
  role:string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
  returnUrl: any;
  constructor( private route: ActivatedRoute, public router:Router, public formBuilder: FormBuilder,public api: ApiService) { }

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
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value =="");
  }

  onKeyPressLogin(event : any){
    if(event.key == "Enter"){
      this.signup(this.signupForm);
    }
  }

  async signup(signupForm:FormGroup) {
    if(signupForm.valid){
      console.log(signupForm.value);


      this.api.signup({
      "name":signupForm.value.name,
      "username":signupForm.value.username,
      "email":signupForm.value.email,
      "role":signupForm.value.role,
      "password":signupForm.value.password
      })
      //.pipe(first())
      .subscribe(
          data => {
            this.router.navigate(['/login']);
          },
          error => {
            console.log(error);
            console.log(error.error.message);
            this.error = "Invalid Credentials"
          });
    }
  }


}
