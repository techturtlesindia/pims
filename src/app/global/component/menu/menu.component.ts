import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Menu } from '../../models/Menu';
import { ApiService } from '../../service/api.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class MenuComponent implements OnInit {

  menuForm: FormGroup;
  validationMessages: any;
  menu: Menu;
  menus: Menu[] = [{
    "id":1,
    "name": "Dashboard",
    "url": "dashboard",
    "icon": "icon-notebook",
    "childmenu": 1,
    "isactive": "1",
    "rolename": "ROLE_ADMIN",
    "enterby": "sanjay",
    "isparent": "1",
  }, {
    "id":2,
    "name": "Documents",
    "url": "documents",
    "icon": "icon-file",
    "childmenu": 1,
    "isactive": "1",
    "rolename": "ROLE_USER",
    "enterby": "sanjay",
    "isparent": "1",
  }, {
    "id":3,
    "name": "User",
    "url": "user",
    "icon": "icon-user",
    "childmenu": 1,
    "isactive": "1",
    "rolename": "ROLE_ADMIN",
    "enterby": "sanjay",
    "isparent": "1",
  }];
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, public formBuilder: FormBuilder, public api: ApiService) { }

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

  async deleteRow(row: Menu) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this record?',
      accept: async () => {
        let saveResponse = await this.api.deleteManu(row);
      }
    });
  }

  editRow(row: Menu) {
    this.menu = row;
    this.menuForm.controls['name'].setValue(row.name);
    this.menuForm.controls['url'].setValue(row.url);
    this.menuForm.controls['rolename'].setValue(row.rolename);
    this.menuForm.controls['childmenu'].setValue(row.childmenu);
    this.menuForm.controls['icon'].setValue(row.icon);
    this.menuForm.controls['isactive'].setValue(row.isactive);
    this.menuForm.controls['isparent'].setValue(row.isparent);
  }

  public revert() {
    this.menuForm.controls['name'].setValue("");
    this.menuForm.controls['url'].setValue("");
    this.menuForm.controls['rolename'].setValue("");
    this.menuForm.controls['childmenu'].setValue("");
    this.menuForm.controls['icon'].setValue("");
    this.menuForm.controls['isactive'].setValue("");
    this.menuForm.controls['isparent'].setValue("");
    this.menuForm.reset(this.menuForm.value);
  }

  public async saveMenus(menuForm: FormGroup) {
    this.menu = new Menu();
    if (menuForm.valid) {
      let result = this.api.currentUserValue;
      this.menu = menuForm.value;
      this.menu.enterby = result.username;
      let saveResponse = await this.api.saveManu(this.menu);
      saveResponse.subscribe((value: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: value.message });
        this.revert();
      })
    }
  }


}
