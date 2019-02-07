import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { Documents } from '../../models/Documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documentForm:FormGroup;
  validationMessages: any;
  document:Documents;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.documentForm = this.formBuilder.group({
      document_no:['', [Validators.required]],
      filepictureFileName:['', Validators.required],
      document_date:['', Validators.required],
      document_type:['', Validators.required],
      document_sub_type:['', Validators.required],
      government_ids:['', Validators.required],
      remarks:['', Validators.required]      
    })
    this.validationMessages = {
      'document_no': [
        {type: 'required', message: 'Please Enter Document No'}
      ],
      'filepictureFileName': [
        {type: 'required', message: 'Please Upload Document'}
      ],
      'document_date': [
        {type: 'required', message: 'Please Enter Document Date'}
      ],
      'document_type': [
        {type: 'required', message: 'Please Enter Document Type'}
      ],
      'document_sub_type': [
        {type: 'required', message: 'Please Select Document Sub Type'}
      ],
      'government_ids': [
        {type: 'required', message: 'Please Enter Document IDs'}
      ],
      'remarks': [
        {type: 'required', message: 'PPlease Enter Remarks'}
      ]
    };
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value =="");
  }

  async saveDocuments(documentForm:FormGroup) {
    this.document = new Documents();
    if(documentForm.valid) {
      this.document = documentForm.value;
      console.log(this.document);
    }
  }

}
