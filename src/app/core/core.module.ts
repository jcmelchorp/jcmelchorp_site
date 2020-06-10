import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
/**
 * Core module
 */
@NgModule({
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    WellcomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    AlertModule,
    CarouselModule,
    ButtonsModule,
  ],
  exports: [
    MainComponent,
    PageNotFoundComponent,
    WellcomeComponent,
  ]
})
export class CoreModule { }
