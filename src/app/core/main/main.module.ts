import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModule} from '../../material-module';



@NgModule({
  declarations: [MainComponent ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
  ]
})
export class MainModule { }
