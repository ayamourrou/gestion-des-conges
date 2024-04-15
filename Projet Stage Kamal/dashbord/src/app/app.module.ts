import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

import { BodyComponent } from './dashbord-admin-component/body_Dashboard/body_dashboard.component';

import { CardGeneriqueComponent } from './dashbord-admin-component/cards/card-generique/card-generique.component';
import { BodyGUsersComponent } from './dashbord-admin-component/body-g-users/body-g-users.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableGestionUsersComponent } from './dashbord-admin-component/tables/table-gestion-users/table-gestion-users.component';
import { ToolbarComponent } from './dashbord-admin-component/toolbars/toolbar/toolbar.component';
import { ToolbarButtonComponent } from './dashbord-admin-component/toolbars/toolbar-button/toolbar-button.component';
import { CompAddEditComponent } from './dashbord-admin-component/comp-add-edit/comp-add-edit.component';
import { BodyGCongesComponent } from './dashbord-admin-component/body-g-conges/body-g-conges.component';
import { TableGestionCongesComponent } from './dashbord-admin-component/tables/table-gestion-conges/table-gestion-conges.component';
import { BodyErrorComponent } from './dashbord-admin-component/body-error/body-error.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { TableCongesAccepteComponent } from './dashbord-admin-component/tables/table-conges-accepte/table-conges-accepte.component';
import { TableCongesWaitingComponent } from './dashbord-admin-component/tables/table-conges-waiting/table-conges-waiting.component';
import { TableCongesRefuseComponent } from './dashbord-admin-component/tables/table-conges-refuse/table-conges-refuse.component';
import { BodyRCongesComponent } from './dashbord-admin-component/body-r-conges/body-r-conges.component';
import { BodyACongesComponent } from './dashbord-admin-component/body-a-conges/body-a-conges.component';
import { BodyWCongesComponent } from './dashbord-admin-component/body-w-conges/body-w-conges.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './dashbord-admin-component/snackbar/snackbar.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ForgotPasswordSecondComponent } from './auth/forgot-password-second/forgot-password-second.component';
import { DashbordUserComponent } from './dashbord-user/dashbord-user.component';
import { BodyDashboardComponent } from './dashbord-user-component/body-dashboard/body-dashboard.component';
import { CardsComponent } from './dashbord-user-component/cards/cards.component';
import { DashboardGeneralComponent } from './dashboard-general/dashboard-general.component';
import { AuthService } from './services/auth.service';
import { TableCongesAccepteUserComponent } from './dashbord-user-component/tables/table-conges-accepte-user/table-conges-accepte-user.component';
import { TableCongesWaitingUserComponent } from './dashbord-user-component/tables/table-conges-waiting-user/table-conges-waiting-user.component';
import { TableCongesRefuseUserComponent } from './dashbord-user-component/tables/table-conges-refuse-user/table-conges-refuse-user.component';
import { BodyCCongesComponent } from './dashbord-user-component/body-c-conges/body-c-conges.component';
import { BodyACongesUserComponent } from './dashbord-user-component/body-a-conges-user/body-a-conges-user.component';
import { BodyWCongesUserComponent } from './dashbord-user-component/body-w-conges-user/body-w-conges-user.component';
import { BodyRCongesUserComponent } from './dashbord-user-component/body-r-conges-user/body-r-conges-user.component';
import { TableCongesResponseUserComponent } from './dashbord-user-component/tables/table-conges-response-user/table-conges-response-user.component';
import { ToolbarButtonUserComponent } from './dashbord-user-component/toolbars-user/toolbar-button-user/toolbar-button-user.component';
import { CompAddEditUserComponent } from './dashbord-user-component/comp-add-edit-user/comp-add-edit-user.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { OndCoreModule } from '@outsiderninjadevs/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyComponent,
    CardGeneriqueComponent,
    BodyGUsersComponent,
    TableGestionUsersComponent,
    ToolbarComponent,
    CompAddEditComponent,
    BodyGCongesComponent,
    TableGestionCongesComponent,
    ToolbarButtonComponent,
    BodyErrorComponent,
    DashbordAdminComponent,
    TableCongesAccepteComponent,
    TableCongesWaitingComponent,
    TableCongesRefuseComponent,
    BodyRCongesComponent,
    BodyACongesComponent,
    BodyWCongesComponent,
    SnackbarComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ForgotPasswordSecondComponent,
    DashbordUserComponent,
    BodyDashboardComponent,
    CardsComponent,
    DashboardGeneralComponent,
    TableCongesAccepteUserComponent,
    TableCongesWaitingUserComponent,
    BodyACongesUserComponent,
    TableCongesRefuseUserComponent,
    BodyWCongesUserComponent,
    BodyCCongesComponent,
    BodyRCongesUserComponent,
    TableCongesResponseUserComponent,
    ToolbarButtonUserComponent,
    CompAddEditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatToolbarModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OndCoreModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
