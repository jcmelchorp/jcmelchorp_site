import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './containers/portfolio.component';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PortfolioModule { }
