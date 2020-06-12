import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublishComponent } from './containers/publish.component';


const APP_ROUTES: Routes = [
  { path: '', component: PublishComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PublishRoutingModule { }
