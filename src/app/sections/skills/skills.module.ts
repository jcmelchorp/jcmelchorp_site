import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsComponent } from './container/skills.component';
import { MaterialModule } from 'src/app/material.module';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SkillsComponent,SkillCardComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SkillsModule { }
