import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './containers/publish.component';



@NgModule({
  declarations: [PublishComponent],
  imports: [
    CommonModule,
    PublishRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PublishModule { }
