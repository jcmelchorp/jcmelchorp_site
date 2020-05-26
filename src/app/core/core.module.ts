import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { WellcomeComponent } from './wellcome/wellcome.component';


import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    WellcomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule,
    CarouselModule
  ],
  exports:[
    MainComponent,
    PageNotFoundComponent,
    WellcomeComponent,
  ]
})
export class CoreModule { }
