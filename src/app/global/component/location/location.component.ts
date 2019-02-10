import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Location } from '../../models/Location';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  locationForm:FormGroup;
  validationMessages: any;
  location:Location;

  locationData = [{
    id: 1,
    parent_id: 1,
    name: 'Name',
    name_native: 'Name Native',
    type: 'type',
    isActive: 0
  }];
  

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.locationForm = this.formBuilder.group({
      name:['', [Validators.required]],
      name_native:['', Validators.required],
      type:['', Validators.required],
      isActive:['', Validators.required]  
    })
    this.validationMessages = {
      'name': [
        {type: 'required', message: 'Please Enter Name'}
      ],
      'name_native': [
        {type: 'required', message: 'Please Enter Name Native'}
      ],
      'type': [
        {type: 'required', message: 'Please Enter Type'}
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

  async saveDocuments(locationForm:FormGroup) {
    this.location = new Location();
    if(locationForm.valid) {
      this.location = locationForm.value;
      console.log(this.location);
    }
  }

}