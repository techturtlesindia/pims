import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { PimsPayScale } from '../../models/PimsPayScale';

@Component({
  selector: 'app-pims-pay-scale',
  templateUrl: './pims-pay-scale.component.html',
  styleUrls: ['./pims-pay-scale.component.scss']
})
export class PimsPayScaleComponent implements OnInit {
  pimsPayScaleForm:FormGroup;
  validationMessages: any;
  pimsPayScale:PimsPayScale;

  pimsPayScaleData = [{
    id: 1,
    scale: 'Scale',
    grade: 11,
    pay_scale_year: 2019,
    isActive: 0
  }];
  

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pimsPayScaleForm = this.formBuilder.group({
      scale:['', [Validators.required]],
      grade:['', Validators.required],
      pay_scale_year:['', Validators.required],
      isActive: ['0', Validators.required] 
    })
    this.validationMessages = {
      'scale': [
        {type: 'required', message: 'Please Enter Scale'}
      ],
      'grade': [
        {type: 'required', message: 'Please Enter Grade'}
      ],
      'pay_scale_year': [
        {type: 'required', message: 'Please Enter Pay Scale Year'}
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

  async saveDocuments(pimsPayScaleForm:FormGroup) {
    this.pimsPayScale = new PimsPayScale();
    if(pimsPayScaleForm.valid) {
      this.pimsPayScale = pimsPayScaleForm.value;
      console.log(this.pimsPayScale);
    }
  }

}