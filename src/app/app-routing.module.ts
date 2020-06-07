import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from "./layout/default/default.component";
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { WellcomeComponent } from './core/wellcome/wellcome.component';

import { InfoComponent } from './sections/info/info.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { PublishComponent } from './sections/publish/publish.component';
import { ContactComponent } from './sections/contact/contact.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { FullPageComponent } from './layout/full-page/full-page.component';

const routes: Routes = [
  { path: '', component: FullPageComponent, children: [
      { path: '', redirectTo: '/wellcome', pathMatch: 'full' },
      { path: 'wellcome', component: WellcomeComponent }
    ]
  },
  { path: '', component: DefaultComponent, children: [
      { path: 'info', component: InfoComponent },
      { path: 'education', component: EducationComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'publish', component: PublishComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'portfolio', component: PortfolioComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
