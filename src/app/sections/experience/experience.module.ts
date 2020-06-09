import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { MaterialModule } from 'src/app/material-module';


@NgModule({
  declarations: [ExperienceComponent],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MaterialModule
  ]
})
export class ExperienceModule { }
