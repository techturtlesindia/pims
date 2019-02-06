import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './global/component/login/login.component';
import { ContainerComponent } from './global/component/container/container.component';
import { DashboardComponent } from './global/component/dashboard/dashboard.component';
import { AuthGuardService } from './global/guard/auth-guard.service';
import { Role } from './global/models/Role';
import { UserComponent } from './global/component/user/user.component';

const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full' },
  { path: 'login', component: LoginComponent},
  { path: 'admin', component: ContainerComponent, children:[
    { path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [AuthGuardService],
      data: {
        breadcrumb: "Dashboard",
      } 
    },{ path: 'user', 
      component: UserComponent, 
      canActivate: [AuthGuardService],
      data: {
        breadcrumb: "User",
       roles: [Role.Admin]
      } 
    }
  ]},
  { path: 'user', component: ContainerComponent, children:[
    { path: 'dashboard', 
      component: DashboardComponent, 
      canActivate: [AuthGuardService],
      data: {
        breadcrumb: "Dashboard",
      } 
    }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
