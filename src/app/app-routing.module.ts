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
