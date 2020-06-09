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
  /*   { path: '', redirectTo: 'wellcome', pathMatch: 'full' },*/
  {
    path: '', component: FullPageComponent, children: [
      {
        path: 'wellcome',
        loadChildren: () =>
          import('./core/core.module').then((m) => m.CoreModule)
      },
    ]
  },
  {
    path: '', component: DefaultComponent, children: [
      {
        path: 'info',
        loadChildren: () =>
          import('./sections/info/info.module').then((m) => m.InfoModule)
      },
      {
        path: 'education',
        loadChildren: () =>
          import('./sections/education/education.module').then((m) => m.EducationModule)
      },
      {
        path: 'experience',
        loadChildren: () =>
          import('./sections/experience/experience.module').then((m) => m.ExperienceModule)
      },
      {
        path: 'portfolio',
        loadChildren: () =>
          import('./sections/portfolio/portfolio.module').then((m) => m.PortfolioModule)
      },
      {
        path: 'publish',
        loadChildren: () =>
          import('./sections/publish/publish.module').then((m) => m.PublishModule)
      },
      {
        path: 'projects',
        loadChildren: () =>
          import('./sections/projects/projects.module').then((m) => m.ProjectsModule)
      }, {
        path: 'skills',
        loadChildren: () =>
          import('./sections/skills/skills.module').then((m) => m.SkillsModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./sections/contact/contact.module').then((m) => m.ContactModule)
      }
    ]
  },
  {
    path: '**', loadChildren: () =>
      import('./core/core.module').then((m) => m.CoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
