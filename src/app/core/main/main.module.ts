import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MaterialModule} from '../../material-module';



@NgModule({
  declarations: [MainComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class MainModule { }
