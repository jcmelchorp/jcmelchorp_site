import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//import { Layouts } from 'src/app/layout/layouts';

const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    /* data: { layout: Layouts.centredContent }, */
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
