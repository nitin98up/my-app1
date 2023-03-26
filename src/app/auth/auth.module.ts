import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthRoutingModule } from './auth-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { UserComponent } from '../user/user.component';



@NgModule({
  declarations: [
    LoginComponent,
    SingupComponent,
    ChangePasswordComponent,
    AuthComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,    AppRoutingModule, AuthRoutingModule, UserRoutingModule,

  ]
})
export class AuthModule { }
