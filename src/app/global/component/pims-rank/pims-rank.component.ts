import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { PimsRank } from '../../models/PimsRank';

@Component({
  selector: 'app-pims-rank',
  templateUrl: './pims-rank.component.html',
  styleUrls: ['./pims-rank.component.scss']
})
export class PimsRankComponent implements OnInit {
  pimsRankForm:FormGroup;
  validationMessages: any;
  pimsRank:PimsRank;

  pimsRankData = [{
    id: 1,
    name: 'Name',
    name_native: 'Name Native',
    abbreviation: 'Abbreviation',
    abbreviation_native: 'Abbreviation Native',
    pmis_pay_scale_id: '12345677',
    isActive: 0
  }];
  

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pimsRankForm = this.formBuilder.group({
      name:['', [Validators.required]],
      name_native:['', Validators.required],
      abbreviation:['', Validators.required],
      abbreviation_native:['', Validators.required],
      pmis_pay_scale_id:['', Validators.required],
      isActive:['0', Validators.required]   
    })
    this.validationMessages = {
      'name': [
        {type: 'required', message: 'Please Enter Name'}
      ],
      'name_native': [
        {type: 'required', message: 'Please Enter Name Native'}
      ],
      'abbreviation': [
        {type: 'required', message: 'Please Enter Abbreviation'}
      ],
      'abbreviation_native': [
        {type: 'required', message: 'Please Enter Abbreviation Native'}
      ],
      'pmis_pay_scale_id': [
        {type: 'required', message: 'Please Enter Pmis Pay Scale Id'}
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

  async saveDocuments(pimsRankForm:FormGroup) {
    this.pimsRank = new PimsRank();
    if(pimsRankForm.valid) {
      this.pimsRank = pimsRankForm.value;
      console.log(this.pimsRank);
    }
  }

}
