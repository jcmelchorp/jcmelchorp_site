import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * Default component
 */
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {

  constructor(public titleService: Title) { }



}
