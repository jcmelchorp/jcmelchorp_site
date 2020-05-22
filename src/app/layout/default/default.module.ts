import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from "../../core/core.module";

import { DefaultComponent } from './default.component';
import { InfoComponent } from 'src/app/sections/info/info.component';
import { EducationComponent } from 'src/app/sections/education/education.component';
import { ExperienceComponent } from 'src/app/sections/experience/experience.component';
import { ProjectsComponent } from 'src/app/sections/projects/projects.component';
import { PublishComponent } from 'src/app/sections/publish/publish.component';
import { ContactComponent } from 'src/app/sections/contact/contact.component';





@NgModule({
  declarations: [
    DefaultComponent,
    InfoComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    PublishComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
  ]
})
export class DefaultModule {

 }
