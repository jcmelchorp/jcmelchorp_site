import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellcomeComponent } from './wellcome/wellcome.component';
//import { Layouts } from 'src/app/layout/layouts';

const APP_ROUTES: Routes = [
  {
    path: 'wellcome',
    component: WellcomeComponent,
    /* data: { layout: Layouts.centredContent }, */
  }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
