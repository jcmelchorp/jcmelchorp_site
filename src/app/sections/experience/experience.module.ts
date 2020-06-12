import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material Design Module import
import { MaterialModule } from 'src/app/material.module';
// Font Awesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './containers/experience.component';


@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MaterialModule,
    FontAwesomeModule
  ]
})
export class ExperienceModule { }
