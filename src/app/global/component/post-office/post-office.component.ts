import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { PostOffice } from '../../models/PostOffice';

@Component({
  selector: 'app-post-office',
  templateUrl: './post-office.component.html',
  styleUrls: ['./post-office.component.scss']
})
export class PostOfficeComponent implements OnInit {
  postOfficeForm:FormGroup;
  validationMessages: any;
  postOffice:PostOffice;

  postOfficeData = [{
    id: 1,
    name: 'Name',
    name_native: 'Name Native',
    isActive: 0
  }];
  

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.postOfficeForm = this.formBuilder.group({
      name:['', [Validators.required]],
      name_native:['', Validators.required],
      isActive:['', Validators.required]   
    })
    this.validationMessages = {
      'name': [
        {type: 'required', message: 'Please Enter Name'}
      ],
      'name_native': [
        {type: 'required', message: 'Please Enter Name Native'}
      ],
      'isActive': [
        {type: 'required', message: 'Please Enter IsActive'}
      ]
    };
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value =="");
  }

  async saveDocuments(postOfficeForm:FormGroup) {
    this.postOffice = new PostOffice();
    if(postOfficeForm.valid) {
      this.postOffice = postOfficeForm.value;
      console.log(this.postOffice);
    }
  }

}