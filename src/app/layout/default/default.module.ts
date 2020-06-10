import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '../../core/core.module';

import { DefaultComponent } from './default.component';
import { InfoComponent } from 'src/app/sections/info/info.component';
import { EducationComponent } from 'src/app/sections/education/education.component';
import { ExperienceComponent } from 'src/app/sections/experience/experience.component';
import { ProjectsComponent } from 'src/app/sections/projects/projects.component';
import { PublishComponent } from 'src/app/sections/publish/publish.component';
import { ContactComponent } from 'src/app/sections/contact/contact.component';
import { SkillsComponent } from 'src/app/sections/skills/skills.component';
import { PortfolioComponent } from 'src/app/sections/portfolio/portfolio.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfModalComponent } from 'src/app/sections/shared/pdf-modal/pdf-modal.component';
import { ImageModalComponent } from 'src/app/sections/shared/image-modal/image-modal.component';
import { InfoModule } from 'src/app/sections/info/info.module';
import { ContactModule } from 'src/app/sections/contact/contact.module';
import { PortfolioModule } from 'src/app/sections/portfolio/portfolio.module';
import { ProjectsModule } from 'src/app/sections/projects/projects.module';
import { EducationModule } from 'src/app/sections/education/education.module';
import { ExperienceModule } from 'src/app/sections/experience/experience.module';
import { PublishModule } from 'src/app/sections/publish/publish.module';
import { SkillsModule } from 'src/app/sections/skills/skills.module';
/**
 * Default module
 */
@NgModule({
  declarations: [
    DefaultComponent,
    PdfModalComponent,
    ImageModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    CoreModule,
    PdfViewerModule,
    InfoModule,
    ContactModule,
    PortfolioModule,
    ProjectsModule,
    ContactModule,
    EducationModule,
    ExperienceModule,
    PublishModule,
    SkillsModule
  ]
})
export class DefaultModule {}
