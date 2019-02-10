import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { User } from '../../models/User';
import { Role } from '../../models/Role';

export interface ILogin {
  username: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  validationMessages: any;
  loginModel:ILogin = {
    username:"",
    password:""
  }
  returnUrl: any;
  constructor( private route: ActivatedRoute, public router:Router, public formBuilder: FormBuilder,public api: ApiService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', Validators.required],
      rememberme:[false]
    })
    this.validationMessages = {
      'username': [
        {type: 'required', message: 'This field is Required'}
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
      this.login(this.loginForm);
    }
  }

  async login(loginForm:FormGroup) {
    if(loginForm.valid){
      this.loginModel = loginForm.value;
      if(loginForm.value.rememberme){
        localStorage.setItem('username', window.btoa(loginForm.value.username));
        localStorage.setItem('password', window.btoa(loginForm.value.password));
        localStorage.setItem('rememberme', window.btoa(loginForm.value.rememberme));
      }else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberme");
      }
      console.log(this.loginModel);
      let result = await this.api.authenticationLogin(this.loginModel);
      let currentUser:User = this.api.currentUserValue;
      if (currentUser) {
        let role;
        if(currentUser.authorities.length != 0) {
          role = currentUser.authorities[0];
        }
        if (role.authority == Role.Admin) {
            this.router.navigate(['/admin/dashboard']);
        }else{
            this.router.navigate(['/user/dashboard']);
        }
        
      }
    }
  }
}
