import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * FullPage component
 */
@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {

  constructor(public titleService: Title) { }

  ngOnInit(): void {
  }

}
