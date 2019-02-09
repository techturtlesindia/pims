import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Documents } from '../../models/Documents';
import { Menu } from '../../models/Menu';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuForm: FormGroup;
  validationMessages: any;
  menu: Menu;
  constructor(public formBuilder: FormBuilder, public api: ApiService) { }

  ngOnInit() {
    this.menuForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', Validators.required],
      icon: ['', Validators.required],
      childmenu: ['', Validators.required],
      isactive: ['', Validators.required],
      rolename: ['', Validators.required],
      isparent: ['', Validators.required]
    })
    this.validationMessages = {
      'name': [
        { type: 'required', message: 'Please Enter Menu Name' }
      ],
      'url': [
        { type: 'required', message: 'Please Enter Menu Url' }
      ],
      'icon': [
        { type: 'required', message: 'Please Enter Menu Icon' }
      ],
      'childmenu': [
        { type: 'required', message: 'Please Select Child Menu' }
      ],
      'isactive': [
        { type: 'required', message: 'Please Select Active Status' }
      ],
      'rolename': [
        { type: 'required', message: 'Please Select Role Name' }
      ],
      'isparent': [
        { type: 'required', message: 'PPlease Select Parent' }
      ]
    };
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value == "");
  }

  async saveMenus(menuForm: FormGroup) {
    this.menu = new Menu();
    if (menuForm.valid) {
      let result = this.api.currentUserValue;
      this.menu = menuForm.value;
      this.menu.enterby = result.username;
      console.log(this.menu);
    }
  }


}
