import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';
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
    RouterModule,
    CoreRoutingModule,
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
