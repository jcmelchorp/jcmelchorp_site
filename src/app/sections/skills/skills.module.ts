import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsRoutingModule } from './skills-routing.module';
// Angular Material Design Module import
import { MaterialModule } from 'src/app/material.module';
// Theme container for recursively theme implementation
import { FlexLayoutModule } from '@angular/flex-layout';
import { SkillsComponent } from './containers/skills.component';


@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
