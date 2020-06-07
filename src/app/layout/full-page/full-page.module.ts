import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from 'src/app/core/core.module';

import { FullPageComponent } from './full-page.component';


@NgModule({
  declarations: [FullPageComponent],
  imports: [
    CommonModule, RouterModule, MaterialModule, FlexLayoutModule, CoreModule
  ]
})
export class FullPageModule { }
