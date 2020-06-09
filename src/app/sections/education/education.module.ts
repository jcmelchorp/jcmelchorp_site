import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    MaterialModule
  ]
})
export class EducationModule { }
