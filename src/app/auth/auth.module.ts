import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ChangePasswordComponent,
    AuthComponent,

  ],
  imports: [
    CommonModule,    AppRoutingModule,

  ]
})
export class AuthModule { }
