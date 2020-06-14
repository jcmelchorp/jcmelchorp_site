import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { FullPageComponent } from './full-page.component';
import { AlertModalComponent } from 'src/app/shared/components/alert-modal/alert-modal.component';
import { ThemeService } from 'src/app/shared/services/theme.service';
/**
 * FullPage module
 *
 * Module for rendering full-page contents like Wellcome page and NotFound page.
 */
@NgModule({
  declarations: [
    FullPageComponent,
    AlertModalComponent
   ],
  imports: [
    CommonModule, RouterModule, MaterialModule, FlexLayoutModule, FontAwesomeModule, CoreModule
  ],
  exports: [
    FullPageComponent
  ]
})
export class FullPageModule { }
