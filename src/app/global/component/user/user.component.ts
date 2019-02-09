import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MessageService } from 'primeng/components/common/messageservice';
import { User } from '../../models/User';
import { Users } from '../../models/Users';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  validationMessages: any;
  user: Users;
  roles: any[] = [{
    "label": "ROLE_USER",
    "value": "ROLE_USER"
  },
  {
    "label": "ROLE_ADMIN",
    "value": "ROLE_ADMIN"
  }]
  users: Users[] = [{
    "id": 1,
    "name": "Sanjay",
    "role": [
      {
        "id": 1,
        "name": "ROLE_USER"
      },
      {
        "id": 3,
        "name": "ROLE_ADMIN"
      }
    ],
    "username": "sanjay",
    "password": "123456",
    "email": "sanjay.singh@techturtles.in"
  }, {
    "id": 2,
    "name": "Kaushik",
    "role": [
      {
        "id": 1,
        "name": "ROLE_USER"
      }
    ],
    "username": "kaushik",
    "password": "123456",
    "email": "sanjay1.singh@techturtles.in"
  }, {
    "id": 3,
    "name": "Nikki",
    "role": [
      {
        "id": 3,
        "name": "ROLE_ADMIN"
      }
    ],
    "username": "neeki1",
    "password": "123456",
    "email": "sanjay2.singh@techturtles.in"
  }];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public formBuilder: FormBuilder, public api: ApiService) { }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value == "");
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      role: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
    this.validationMessages = {
      'name': [
        { type: 'required', message: 'Please Enter Name' }
      ],
      'role': [
        { type: 'required', message: 'Please Select Role' }
      ],
      'username': [
        { type: 'required', message: 'Please Enter Username' }
      ],
      'password': [
        { type: 'required', message: 'Please Enter Password' }
      ],
      'email': [
        { type: 'required', message: 'Please Select Email' },
        { type: 'email', message: 'Please Enter Valid Email' }
      ]
    };
  }

  async deleteRow(row: Users) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this record?',
      accept: async () => {
        let saveResponse = await this.api.deleteUser(row);
      }
    });
  }

  editRow(row: Users) {
    this.user = row;
    this.userForm.controls['name'].setValue(row.name);
    this.userForm.controls['username'].setValue(row.username);
    this.userForm.controls['password'].setValue(row.password);
    this.userForm.controls['email'].setValue(row.email);
    this.userForm.controls['role'].setValue(row.role);
  }

  public revert() {
    this.userForm.controls['name'].setValue("");
    this.userForm.controls['username'].setValue("");
    this.userForm.controls['password'].setValue("");
    this.userForm.controls['email'].setValue("");
    this.userForm.controls['role'].setValue("");
    this.userForm.reset(this.userForm.value);
  }

  public async saveUser(userForm: FormGroup) {
    if (userForm.valid) {
      console.log(userForm.value)
    }
  }

}
