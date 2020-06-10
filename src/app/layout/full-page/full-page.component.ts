import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

/**
 * FullPage component
 */
@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {
  login = faSignInAlt;
  toggledark = faSun;
  constructor(public titleService: Title) { }
  ngOnInit(): void {
  }

}
