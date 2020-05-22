import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MainComponent,
    PageNotFoundComponent,
  ]
})
export class CoreModule { }
