import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './containers/education.component';


const APP_ROUTES: Routes = [
  { path: '', component: EducationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
