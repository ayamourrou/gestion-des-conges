import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './dashbord-admin-component/body_Dashboard/body_dashboard.component';
import { BodyGUsersComponent } from './dashbord-admin-component/body-g-users/body-g-users.component';
import { BodyGCongesComponent } from './dashbord-admin-component/body-g-conges/body-g-conges.component';
import { BodyErrorComponent } from './dashbord-admin-component/body-error/body-error.component';
import { LoginComponent } from './auth/login/login.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { BodyRCongesComponent } from './dashbord-admin-component/body-r-conges/body-r-conges.component';
import { BodyACongesComponent } from './dashbord-admin-component/body-a-conges/body-a-conges.component';
import { BodyWCongesComponent } from './dashbord-admin-component/body-w-conges/body-w-conges.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ForgotPasswordSecondComponent } from './auth/forgot-password-second/forgot-password-second.component';
import { DashbordUserComponent } from './dashbord-user/dashbord-user.component';
import { BodyDashboardComponent } from './dashbord-user-component/body-dashboard/body-dashboard.component';
import { DashboardGeneralComponent } from './dashboard-general/dashboard-general.component';
import { authGuard } from './guards/auth.guard';
import { BodyACongesUserComponent } from './dashbord-user-component/body-a-conges-user/body-a-conges-user.component';
import { adminGuard } from './guards/admin.guard';
import { TableCongesAccepteUserComponent } from './dashbord-user-component/tables/table-conges-accepte-user/table-conges-accepte-user.component';
import { BodyRCongesUserComponent } from './dashbord-user-component/body-r-conges-user/body-r-conges-user.component';
import { BodyWCongesUserComponent } from './dashbord-user-component/body-w-conges-user/body-w-conges-user.component';
import { BodyCCongesComponent } from './dashbord-user-component/body-c-conges/body-c-conges.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ForgotPassword_PageOne', component: ForgotPasswordComponent },
  { path: 'ForgotPassword_PageTow', component: ForgotPasswordSecondComponent },
  {
    path: 'dashboard',
    component: DashboardGeneralComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'admin',
        canActivateChild: [adminGuard],
        component: DashbordAdminComponent,
        children: [
          { path: '', redirectTo: 'Cards', pathMatch: 'full' },
          { path: 'Cards', component: BodyComponent },
          {
            path: 'Gestion_des_utilisateurs',
            component: BodyGUsersComponent,
          },
          { path: 'Gestion_des_conges', component: BodyGCongesComponent },
          { path: 'Conge_Accept', component: BodyACongesComponent },
          { path: 'Conge_Waiting', component: BodyWCongesComponent },
          { path: 'Conge_refuse', component: BodyRCongesComponent },
        ],
      },
      {
        path: 'user',
        component: DashbordUserComponent,
        children: [
          { path: '', redirectTo: 'Cards', pathMatch: 'full' },
          { path: 'Cards', component: BodyDashboardComponent },
          {
            path: 'Gestion_des_conges',
            component: BodyCCongesComponent,
          },
          {
            path: 'Conge_Accept',
            component: BodyACongesUserComponent,
          },
          {
            path: 'Conge_Waiting',
            component: BodyWCongesUserComponent,
          },
          {
            path: 'Conge_refuse',
            component: BodyRCongesUserComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  { path: 'not-found', component: BodyErrorComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
