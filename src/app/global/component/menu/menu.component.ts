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
  page = 1;
  pageNo = 0;
  size = 10;
  totalRecords = 0;
  isEdit = false;
  selectedMenuId = 0;
  menu: Menu;
  menus: Menu[] = [];
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

    this.getMenus();
  }

  async getMenus() {
    let saveResponse = await this.api.getManus(this.page, this.size);
    saveResponse.subscribe((value: any) => {
      this.menus = value.content;
      this.totalRecords = value.totalElements;
    })
  }

  hasValidationError(validation: any, controlName: (string | number)[], formGroup: FormGroup): boolean {
    const control: AbstractControl = formGroup.get(controlName);
    return control.hasError(validation.type) && (control.dirty || control.touched) && (control == null || control.value == "");
  }

  async deleteRow(row: Menu) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this record?',
      accept: async () => {
        debugger;
        let deleteResponse = await this.api.deleteManu(row);
        deleteResponse.subscribe(async (value) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: "Menu delete successfully" });
          this.getMenus();
        })
      }
    });
  }

  editRow(row: Menu) {
    this.isEdit = true;
    this.menu = row;
    this.selectedMenuId = row.id;
    this.menuForm.controls['name'].setValue(row.name);
    this.menuForm.controls['url'].setValue(row.url);
    this.menuForm.controls['rolename'].setValue(row.rolename);
    if (row.childmenu.length == 0) {
      this.menuForm.controls['childmenu'].setValue("1");
    }
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
    this.isEdit = false;
  }

  public async saveMenus(menuForm: FormGroup) {
    this.menu = new Menu();
    if (menuForm.valid) {
      if (this.isEdit == false) {
        let result = this.api.currentUserValue;
        this.menu = menuForm.value;
        this.menu.id = null;
        this.menu.enterby = result.username;
        let saveResponse = await this.api.saveManu(this.menu);
        saveResponse.subscribe((value: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: value.message });
          this.revert();
          this.getMenus();
        })
      } else {
        this.menu.name = menuForm.value.name;
        this.menu.url = menuForm.value.url;
        this.menu.icon = menuForm.value.icon;
        if (menuForm.value.childmenu == "1") {
          this.menu.childmenu = [];
        }
        this.menu.isactive = menuForm.value.isactive;
        this.menu.rolename = menuForm.value.rolename;
        this.menu.isparent = menuForm.value.isparent;
        this.menu.id = this.selectedMenuId;
        let updateResponse = await this.api.updateManu(this.menu);
        updateResponse.subscribe((value: any) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: value.message });
          this.revert();
          this.getMenus();
        })
      }
    }
  }

  paginate(event) {
    this.size = event.rows;
    this.page = (event.page + 1);
    this.pageNo = event.page;
    this.getMenus();
  }
}
