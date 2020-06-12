import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material Design Module import
import { MaterialModule } from 'src/app/material.module';
// Font Awesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CoreModule } from '../../core/core.module';

import { DefaultComponent } from './default.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { InfoModule } from 'src/app/sections/info/info.module';
import { ContactModule } from 'src/app/sections/contact/contact.module';
import { PortfolioModule } from 'src/app/sections/portfolio/portfolio.module';
import { EducationModule } from 'src/app/sections/education/education.module';
import { ExperienceModule } from 'src/app/sections/experience/experience.module';
import { PublishModule } from 'src/app/sections/publish/publish.module';
import { SkillsModule } from 'src/app/sections/skills/skills.module';
import { PdfModalComponent } from 'src/app/shared/components/pdf-modal/pdf-modal.component';
import { ImageModalComponent } from 'src/app/shared/components/image-modal/image-modal.component';
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
    FontAwesomeModule,
    FlexLayoutModule,
    CoreModule,
    PdfViewerModule,
    InfoModule,
    ContactModule,
    PortfolioModule,
    ContactModule,
    EducationModule,
    ExperienceModule,
    PublishModule,
    SkillsModule
  ]
})
export class DefaultModule {}
