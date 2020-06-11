import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [PublishComponent],
  imports: [
    CommonModule,
    PublishRoutingModule,
    MaterialModule
  ]
})
export class PublishModule { }
