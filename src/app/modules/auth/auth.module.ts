import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PrivacyComponent } from './components/privacy/privacy.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AlertModule,
  ],
  exports: [],
  providers: []
})
export class AuthModule { }
