import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Additionalqualification } from '../../../models/Additionalqualification';


@Component({
  selector: 'app-additionalqualification',
  templateUrl: './additionalqualification.component.html',
  styleUrls: ['./additionalqualification.component.scss']
})
export class AdditionalqualificationComponent implements OnInit {
  additionalqualificationForm:FormGroup;
  validationMessages: any;
  additionalqualification:Additionalqualification;

  additionalqualificationData = [{
    id: 1,
    parent_id: 1,
    name: 'Name',
    name_native: 'Name Native',
    keyword: 'keyword',
    abbreviation: 'Abbreviation',
    abbreviation_native: 'Abbreviation Native',
    si_no: '12345677',
    isActive: 0
  }];
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.additionalqualificationForm = this.formBuilder.group({
      name:['', [Validators.required]],
      name_native:['', Validators.required],
      keyword:['', Validators.required],
      abbreviation:['', Validators.required],
      abbreviation_native:['', Validators.required],
      si_no:['', Validators.required],
      isActive:['0', Validators.required]      
    })
    this.validationMessages = {
      'name': [
        {type: 'required', message: 'Please Enter Name'}
      ],
      'name_native': [
        {type: 'required', message: 'Please Enter Name Native'}
      ],
      'keyword': [
        {type: 'required', message: 'Please Enter Keyword'}
      ],
      'abbreviation': [
        {type: 'required', message: 'Please Enter Abbreviation'}
      ],
      'abbreviation_native': [
        {type: 'required', message: 'Please Enter Abbreviation Native'}
      ],
      'si_no': [
        {type: 'required', message: 'Please Enter SI No'}
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

  async saveDocuments(documentForm:FormGroup) {
    this.additionalqualification = new Additionalqualification();
    if(documentForm.valid) {
      this.additionalqualification = documentForm.value;
      console.log(this.additionalqualification);
    }

  }

}
