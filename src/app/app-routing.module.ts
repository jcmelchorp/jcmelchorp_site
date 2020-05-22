import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from "./layout/default/default.component";
import { InfoComponent } from './sections/info/info.component';
import { EducationComponent } from './sections/education/education.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { PublishComponent } from './sections/publish/publish.component';
import { ContactComponent } from './sections/contact/contact.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:'', component: DefaultComponent, children: [
      {path: '',   redirectTo: '/info', pathMatch: 'full'},
      {path:'info',component: InfoComponent},
      {path:'education',component: EducationComponent},
      {path:'experience',component: ExperienceComponent},
      {path:'projects',component: ProjectsComponent},
      {path:'publish',component: PublishComponent},
      {path:'contact',component: ContactComponent},
      ]
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
