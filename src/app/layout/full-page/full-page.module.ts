import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material Design Module import
import { MaterialModule } from 'src/app/material.module';
// Font Awesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from 'src/app/core/core.module';

import { FullPageComponent } from './full-page.component';
import { AlertModalComponent } from 'src/app/shared/components/alert-modal/alert-modal.component';
/**
 * FullPage module
 *
 * Module for rendering full-page contents like Wellcome page and NotFound page.
 */
@NgModule({
  declarations: [
    FullPageComponent,
    AlertModalComponent ],
  imports: [
    CommonModule, RouterModule, MaterialModule, FlexLayoutModule, CoreModule, FontAwesomeModule
  ]
})
export class FullPageModule { }
