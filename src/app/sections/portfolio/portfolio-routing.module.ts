import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './containers/portfolio.component';


const APP_ROUTES: Routes = [
  { path: '', component: PortfolioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(APP_ROUTES)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
