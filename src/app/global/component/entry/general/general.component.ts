import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { General } from '../../../models/General';


@Component({
  selector: 'app-additionalqualification',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  generalForm:FormGroup;
  validationMessages: any;
  general:General;

  generalData = [{
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
    this.generalForm = this.formBuilder.group({
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
    this.general = new General();
    if(documentForm.valid) {
      this.general = documentForm.value;
      console.log(this.general);
    }

  }

}
