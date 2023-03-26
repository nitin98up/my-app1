import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
