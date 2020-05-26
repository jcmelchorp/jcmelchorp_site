import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

import { FullPageComponent } from './full-page.component';
import { PageNotFoundComponent } from 'src/app/core/page-not-found/page-not-found.component';
import { WellcomeComponent } from 'src/app/core/wellcome/wellcome.component';




@NgModule({
  declarations: [FullPageComponent, PageNotFoundComponent, WellcomeComponent],
  imports: [
    CommonModule, MaterialModule, RouterModule,FlexLayoutModule
  ]
})
export class FullPageModule { }
