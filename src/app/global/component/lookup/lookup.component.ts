import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Lookup } from '../../models/Lookup';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {
  lookupForm:FormGroup;
  validationMessages: any;
  lookup:Lookup;

  lookupData = [{
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
    this.lookupForm = this.formBuilder.group({
      name:['', [Validators.required]],
      name_native:['', Validators.required],
      keyword:['', Validators.required],
      abbreviation:['', Validators.required],
      abbreviation_native:['', Validators.required],
      si_no:['', Validators.required],
      isActive:['', Validators.required]      
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
    this.lookup = new Lookup();
    if(documentForm.valid) {
      this.lookup = documentForm.value;
      console.log(this.lookup);
    }
  }

}