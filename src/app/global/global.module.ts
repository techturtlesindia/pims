import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent, AppSidebarNavItemComponent, AppSidebarNavLinkComponent, AppSidebarNavDropdownComponent, AppSidebarNavTitleComponent } from './component/sidebar/sidebar.component';
import { LoginComponent } from './component/login/login.component';
import { ContainerComponent } from './component/container/container.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';
import { Routes, RouterModule } from '@angular/router';
import { BrandMinimizeDirective } from './directive/brand-minimize.directive';
import { MobileSidebarToggleDirective } from './directive/mobile-sidebar-toggle.directive';
import { NavDropdownToggleDirective } from './directive/nav-dropdown-toggle.directive';
import { NavDropdownDirective } from './directive/nav-dropdown.directive';
import { SidebarMinimizeDirective } from './directive/sidebar-minimize.directive';
import { SidebarOffCanvasCloseDirective } from './directive/sidebar-off-canvas-close.directive';
import { SidebarToggleDirective } from './directive/sidebar-toggle.directive';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { GeneralInformationComponent } from './component/general-information/general-information.component';
import { DocumentsComponent } from './component/documents/documents.component';
import { TokenInterceptor } from './service/token-interceptor';
import { MenuComponent } from './component/menu/menu.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SignupComponent } from './component/signup/signup.component';
const routes: Routes = [];
@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ContainerComponent,
    DashboardComponent,
    BreadcrumbComponent,
    BrandMinimizeDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective,
    NavDropdownDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    SidebarToggleDirective,
    UserComponent,
    HomeComponent,
    GeneralInformationComponent,
    DocumentsComponent,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavTitleComponent,
    MenuComponent,
    NotfoundComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(routes),
    ToastModule,
    ConfirmDialogModule,
    MultiSelectModule,
    ScrollingModule
  ], exports: [
    ToastModule,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ContainerComponent,
    HttpClientModule,
    DashboardComponent,
    BrowserAnimationsModule,
    FormsModule,
    GeneralInformationComponent,
    ReactiveFormsModule,
    AppSidebarNavItemComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavTitleComponent,
    ConfirmDialogModule,
    MultiSelectModule,
    ScrollingModule
  ], providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class GlobalModule { }
