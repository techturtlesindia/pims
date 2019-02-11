import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './global/component/login/login.component';
import { UsersettingComponent } from './global/component/usersetting/usersetting.component';

import { ContainerComponent } from './global/component/container/container.component';
import { DashboardComponent } from './global/component/dashboard/dashboard.component';
import { AuthGuardService } from './global/guard/auth-guard.service';
import { Role } from './global/models/Role';
import { UserComponent } from './global/component/user/user.component';
import { GeneralInformationComponent } from './global/component/general-information/general-information.component';
import { DocumentsComponent } from './global/component/documents/documents.component';
import { NotfoundComponent } from './global/component/notfound/notfound.component';
import { MenuComponent } from './global/component/menu/menu.component';
import { LookupComponent } from './global/component/master/lookup/lookup.component';
import { LocationComponent } from './global/component/master/location/location.component';
import { PimsRankComponent } from './global/component/master/pims-rank/pims-rank.component';
import { PostOfficeComponent } from './global/component/master/post-office/post-office.component';
import { PimsPayScaleComponent } from './global/component/master/pims-pay-scale/pims-pay-scale.component';
import { AdditionalqualificationComponent } from './global/component/entry/additionalqualification/additionalqualification.component';
import { AddressInformationComponent } from './global/component/entry/address-information/address-information.component';
import { AwardComponent } from './global/component/entry/award/award.component';
import { ChildrenComponent } from './global/component/entry/children/children.component';
import { DisciplinaryComponent } from './global/component/entry/disciplinary/disciplinary.component';
import { EducationalComponent } from './global/component/entry/educational/educational.component';
import { ForeigntrainingComponent } from './global/component/entry/foreigntraining/foreigntraining.component';
import { ForeigntravelComponent } from './global/component/entry/foreigntravel/foreigntravel.component';
import { GeneralComponent } from './global/component/entry/general/general.component';
import { LanguageComponent } from './global/component/entry/language/language.component';
import { LeaveComponent } from './global/component/entry/leave/leave.component';
import { LocalComponent } from './global/component/entry/local/local.component';
import { MagisterialComponent } from './global/component/entry/magisterial/magisterial.component';
import { ProfessionalComponent } from './global/component/entry/professional/professional.component';
import { PublicationComponent } from './global/component/entry/publication/publication.component';
import { SeniorComponent } from './global/component/entry/senior/senior.component';
import { ServiceComponent } from './global/component/entry/service/service.component';
import { SpouseComponent } from './global/component/entry/spouse/spouse.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: ContainerComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Dashboard",
        }
      }, {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "User",
          roles: [Role.Admin]
        }
      }, {
        path: 'general',
        component: GeneralInformationComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "General Information",
          roles: [Role.Admin]
        }
      }, {
        path: 'documents',
        component: DocumentsComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Documents",
          roles: [Role.Admin]
        }
      }, {
        path: 'menu',
        component: MenuComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Menu",
          roles: [Role.Admin]
        }
      },
      {
        path: 'usersetting',
        component: UsersettingComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Menu",
          roles: [Role.Admin]
        }
      },
      {
        path: 'master/lookup',
        component: LookupComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Lookup",
          roles: [Role.Admin]
        }
      },
      {
        path: 'master/location',
        component: LocationComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Location",
          roles: [Role.Admin]
        }
      },{
        path: 'master/ranks',
        component: PimsRankComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Pims Rank",
          roles: [Role.Admin]
        }
      },
      {
        path: 'master/postoffice',
        component: PostOfficeComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Post Office",
          roles: [Role.Admin]
        }
      },{
        path: 'master/payscale',
        component: PimsPayScaleComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Pims Pay Scale",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/additionalqualification',
        component: AdditionalqualificationComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Additional Qualification Component",
          roles: [Role.Admin]
        }
      },
      {
        path: 'entry/address',
        component: AddressInformationComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Address",
          roles: [Role.Admin]
        }
      },
      {
        path: 'entry/award',
        component: AwardComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Award",
          roles: [Role.Admin]
        }
      },
      {
        path: 'entry/children',
        component: ChildrenComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Children",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/disciplinary',
        component: DisciplinaryComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Disciplinary",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/educational',
        component: EducationalComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "educational",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/foreigntraining',
        component: ForeigntrainingComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "foreigntraining",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/foreigntravel',
        component: ForeigntravelComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "foreigntravel",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/general',
        component: GeneralComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "general",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/language',
        component: LanguageComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "language",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/leave',
        component: LeaveComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "leave",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/local',
        component: LocalComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "local",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/magisterial',
        component: MagisterialComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Magisterial",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/professional',
        component: ProfessionalComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Professional",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/publication',
        component: PublicationComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "publication",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/senior',
        component: SeniorComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Senior",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/service',
        component: ServiceComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Service",
          roles: [Role.Admin]
        }
      },{
        path: 'entry/spouse',
        component: SpouseComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Spouse",
          roles: [Role.Admin]
        }
      },{
        path: '**',
        component: NotfoundComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Not Found",
          roles: [Role.Admin]
        }
      }
    ]
  },
  {
    path: 'user', component: ContainerComponent, children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Dashboard",
        }
      }, {
        path: '**',
        component: NotfoundComponent,
        canActivate: [AuthGuardService],
        data: {
          breadcrumb: "Not Found",
          roles: [Role.Admin]
        }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
