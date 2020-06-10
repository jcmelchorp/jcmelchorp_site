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
import {DefaultModule} from './layout/default/default.module';
import {FullPageModule} from './layout/full-page/full-page.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
/**
 * App module
 *
 *
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule,
    MaterialModule,
    LayoutModule,
    DefaultModule,
    FullPageModule,
    PdfViewerModule,
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
