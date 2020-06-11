import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './layout/default/default.component';

import { FullPageComponent } from './layout/full-page/full-page.component';

const APP_ROUTES: Routes = [
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
/**
 * AppRouting module
 */
@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
