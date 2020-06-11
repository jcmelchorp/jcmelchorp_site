import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material Design Module import
import { MaterialModule } from 'src/app/material.module';
// Font Awesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EducationRoutingModule } from './education-routing.module';
import { EducationComponent } from './education.component';



@NgModule({
  declarations: [EducationComponent],
  imports: [
    CommonModule,
    EducationRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class EducationModule { }
