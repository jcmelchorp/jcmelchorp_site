import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faSignInAlt, faGlobe, faInfoCircle, faUserGraduate, faCog } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faSun } from '@fortawesome/free-regular-svg-icons';
/**
 * Default component
 */
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent {
  login = faSignInAlt;
  toggledark = faSun;
  print = faFilePdf;
  globe = faGlobe;
  info = faInfoCircle;
  userGraduate = faUserGraduate;
  cog = faCog;
  constructor(public titleService: Title) { }



}
