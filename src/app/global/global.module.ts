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
import { LookupComponent } from './component/master/lookup/lookup.component';
import { LocationComponent } from './component/master/location/location.component';
import { PimsRankComponent } from './component/master/pims-rank/pims-rank.component';
import { PimsPayScaleComponent } from './component/master/pims-pay-scale/pims-pay-scale.component';
import { PostOfficeComponent } from './component/master/post-office/post-office.component';
import { SignupComponent } from './component/signup/signup.component';
import { UsersettingComponent } from './component/usersetting/usersetting.component';
import { AddressInformationComponent } from './component/entry/address-information/address-information.component';
import { AdditionalqualificationComponent } from './component/entry/additionalqualification/additionalqualification.component';
import { ChildrenComponent } from './component/entry/children/children.component';
import { LocalComponent } from './component/entry/local/local.component';
import { AwardComponent } from './component/entry/award/award.component';
import { DisciplinaryComponent } from './component/entry/disciplinary/disciplinary.component';
import { EducationalComponent } from './component/entry/educational/educational.component';
import { ForeigntrainingComponent } from './component/entry/foreigntraining/foreigntraining.component';
import { ForeigntravelComponent } from './component/entry/foreigntravel/foreigntravel.component';
import { MagisterialComponent } from './component/entry/magisterial/magisterial.component';
import { GeneralComponent } from './component/entry/general/general.component';
import { PublicationComponent } from './component/entry/publication/publication.component';
import { ServiceComponent } from './component/entry/service/service.component';
import { LanguageComponent } from './component/entry/language/language.component';
import { ProfessionalComponent } from './component/entry/professional/professional.component';
import { SpouseComponent } from './component/entry/spouse/spouse.component';
import { SeniorComponent } from './component/entry/senior/senior.component';
import { LeaveComponent } from './component/entry/leave/leave.component';
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
    SignupComponent,
    UsersettingComponent,
    LookupComponent,
    LocationComponent,
    PimsRankComponent,
    PimsPayScaleComponent,
    PostOfficeComponent,
    SignupComponent,
    AddressInformationComponent,
    AdditionalqualificationComponent,
    ChildrenComponent,
    LocalComponent,
    AwardComponent,
    DisciplinaryComponent,
    EducationalComponent,
    ForeigntrainingComponent,
    ForeigntravelComponent,
    MagisterialComponent,
    GeneralComponent,
    PublicationComponent,
    ServiceComponent,
    LanguageComponent,
    ProfessionalComponent,
    SpouseComponent,
    SeniorComponent,
    LeaveComponent
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
