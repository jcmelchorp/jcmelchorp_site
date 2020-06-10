import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from 'src/app/core/core.module';

import { FullPageComponent } from './full-page.component';
import { AlertModalComponent } from 'src/app/sections/shared/alert-modal/alert-modal.component';
/**
 * FullPage module
 */
@NgModule({
  declarations: [
    FullPageComponent,
    AlertModalComponent ],
  imports: [
    CommonModule, RouterModule, MaterialModule, FlexLayoutModule, CoreModule
  ]
})
export class FullPageModule { }
