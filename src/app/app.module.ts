import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Angular Material Design Module import
import {MaterialModule} from './material-module';
// Theme container for recursively theme implementation
import {OverlayContainer} from '@angular/cdk/overlay';
import {LayoutModule} from '@angular/cdk/layout';
import {DefaultModule} from "./layout/default/default.module";

import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    DefaultModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('app-light-theme');
  }
}
