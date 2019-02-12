import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Lookup } from '../../../models/Lookup';
import { ApiService } from '../../../service/api.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class LookupComponent implements OnInit {
  lookupForm:FormGroup;
  validationMessages: any;
  lookup:Lookup;

  lookups = [{
    id: 1,
    parent_id: 1,
    name: 'Namedfgdfgdfgfdgfd',
    name_native: 'Name Native',
    keyword: 'keyword',
    abbreviation: 'Abbreviation',
    abbreviation_native: 'Abbreviation Native',
    si_no: '12345677',
    isActive: 0,
    enterby: "sanjay",
    rolename: "ROLE_ADMIN",
  }];
  

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public formBuilder: FormBuilder, public api: ApiService) { }

  ngOnInit() {
    this.lookupForm = this.formBuilder.group({
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

  editRow(row: Lookup) {
    
    this.lookup = row;
    this.lookupForm.controls['name'].setValue(row.name);
    this.lookupForm.controls['keyword'].setValue(row.keyword);
   this.lookupForm.controls['name_native'].setValue(row.name_native);
    this.lookupForm.controls['abbreviation'].setValue(row.abbreviation);
   this.lookupForm.controls['abbreviation_native'].setValue(row.abbreviation_native);
    this.lookupForm.controls['si_no'].setValue(row.si_no);
   this.lookupForm.controls['isActive'].setValue(row.isActive);
   

  }

  public async saveLookups(lookupForm: FormGroup) {
    this.lookup = new Lookup();
    if (lookupForm.valid) {
      let result = this.api.currentUserValue;
      this.lookup = lookupForm.value;
      this.lookup.enterby = result.username;
      let saveResponse = await this.api.saveLookup(this.lookup);
      saveResponse.subscribe((value: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: value.message });
        this.revert();
      })
    }
  }

  public revert() {
    this.lookupForm.controls['name'].setValue("");
    this.lookupForm.controls['keyword'].setValue("");
    this.lookupForm.controls['name_native'].setValue("");
    this.lookupForm.controls['abbreviation'].setValue("");
    this.lookupForm.controls['abbreviation_native'].setValue("");
    this.lookupForm.controls['si_no'].setValue("");
    this.lookupForm.controls['isActive'].setValue("");
    this.lookupForm.reset(this.lookupForm.value);
  }

}