import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './containers/experience.component';


const APP_ROUTES: Routes = [
  { path: '', component: ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
