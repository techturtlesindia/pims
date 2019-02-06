import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { GeneralInformation } from '../../models/GeneralInformation';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent implements OnInit {
  generalInformationForm:FormGroup;
  validationMessages: any;
  generalInformation:GeneralInformation;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generalInformationForm = this.formBuilder.group({
      govt_id:['', [Validators.required]],
      profilepic:['', Validators.required],
      name_english:['', Validators.required],
      name_bangla:['', Validators.required],
      fathername_english:['', Validators.required],
      fathername_bangla:['', Validators.required],
      mothername_english:['', Validators.required],
      mothername_bangla:['', Validators.required],
      date_of_birth:['', Validators.required],
      sex:['', Validators.required],
      prefix_name:['', Validators.required],
      suffix_name:['', Validators.required],
      marital_status:['', Validators.required],
      home_district:['', Validators.required],
      religion:['', Validators.required],
      rank:[''],
      designation:[''],
      location:[''],
      organization:[''],
      orderorjoin_type:['', Validators.required],
      oorj_date:['', Validators.required],
      freedom_fighter:['', Validators.required],
      freedom_fighterifyes:[''],
      prl_date:[''],
      noofspouse:['', Validators.required],
      batch:['', Validators.required],
      confirmation_godate:['', Validators.required],
      expire_date:['', Validators.required],
      national_seniority:[''],
      status:[''],
      promote:['', Validators.required],
      codre:[''],
      codre_date:[''],
      activity_status:['', Validators.required],
      placement:['', Validators.required],
      code:[''],
      additional_personalinfo:['', Validators.required],
      remarks:['', Validators.required]      
    })
    this.validationMessages = {
      'govt_id': [
        {type: 'required', message: 'Please select your Govt Id'}
      ],
      'profilepic': [
        {type: 'required', message: 'This field is Required'}
      ],
      'name_english': [
        {type: 'required', message: 'Please enter your Name (English)'}
      ],
      'name_bangla': [
        {type: 'required', message: 'Please enter your Name (Bangla)'}
      ],
      'fathername_english': [
        {type: 'required', message: 'Please enter your Father`s Name(English)'}
      ],
      'fathername_bangla': [
        {type: 'required', message: 'Please enter your Father`s Name(Bangla)'}
      ],
      'mothername_english': [
        {type: 'required', message: 'Please enter your Mother`s Name(English)'}
      ],
      'mothername_bangla': [
        {type: 'required', message: 'Please enter your Mother`s Name(Bangla)'}
      ],
      'date_of_birth': [
        {type: 'required', message: 'Please enter your Date of Birth'}
      ],
      'sex': [
        {type: 'required', message: 'Please select your sex'}
      ],      
      'prefix_name': [
        {type: 'required', message: 'Please select your Prefix Name'}
      ],
      'suffix_name': [
        {type: 'required', message: 'Please select your Suffix Name'}
      ],
      'marital_status': [
        {type: 'required', message: 'Please select your Marital Status'}
      ],
      'home_district': [
        {type: 'required', message: 'Please select your Home District'}
      ],
      'religion': [
        {type: 'required', message: 'Please select your Religion'}
      ],
      'rank': [
        {type: 'required', message: 'Please enter your Rank'}
      ],
      'designation': [
        {type: 'required', message: 'Please enter your Designation'}
      ],
      'location': [
        {type: 'required', message: 'Please enter your Location'}
      ],
      'organization': [
        {type: 'required', message: 'Please enter your Organization'}
      ],
      'orderorjoin_type': [
        {type: 'required', message: 'Please select your Order/Join Type'}
      ],
      'oorj_date': [
        {type: 'required', message: 'Please enter your O/J Date'}
      ],
      'freedom_fighter': [
        {type: 'required', message: 'Please select your Freedom Fighter'}
      ],
      
      'prl_date': [
        {type: 'required', message: 'Please enter your PRL Date'}
      ],
      'noofspouse': [
        {type: 'required', message: 'Please enter your No. of Spouse'}
      ],
      'batch': [
        {type: 'required', message: 'Please select your Batch'}
      ],
      'confirmation_godate': [
        {type: 'required', message: 'Please enter your Confirmation GO Date'}
      ],
      'expire_date': [
        {type: 'required', message: 'Please enter your Expire Date'}
      ],
      'national_seniority': [
        {type: 'required', message: 'Please enter your National Seniority'}
      ],
      'status': [
        {type: 'required', message: 'Please enter your Status'}
      ],
      'promote': [
        {type: 'required', message: 'Please select your Promote'}
      ],
      'codre': [
        {type: 'required', message: 'Please enter your Codre'}
      ],
      'codre_date': [
        {type: 'required', message: 'Please enter your Codre Date'}
      ],
      'activity_status': [
        {type: 'required', message: 'Please select your Activity Status'}
      ],
      'placement': [
        {type: 'required', message: 'Please select your Placement'}
      ],
      'code': [
        {type: 'required', message: 'Please enter your Code'}
      ],
      'additional_personalinfo': [
        {type: 'required', message: 'Please enter your Additional Personal Info'}
      ],
      'remarks': [
        {type: 'required', message: 'Please enter your Remarks'}
      ]
    };
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value =="");
  }

  async saveGeneralInformation(generalInformationForm:FormGroup) {
    this.generalInformation = new GeneralInformation();
    if(generalInformationForm.valid) {
      this.generalInformation = generalInformationForm.value;
      console.log(this.generalInformation);
    }
  }
}
