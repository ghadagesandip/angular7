import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material-module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
