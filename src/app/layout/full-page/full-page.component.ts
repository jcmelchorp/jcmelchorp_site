import { Component, OnInit } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { faSignInAlt, faGlobe, faCog, faUserTie, faConciergeBell, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';

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
  globe = faGlobe;
  cog = faCog;
  userTie = faUserTie;
  concierge = faConciergeBell;
  paw = faPaw;
  isDarkTheme: Observable<boolean>;

  constructor(
    public titleService: Title,
    private themeService: ThemeService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIcon('en', sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg'));
      iconRegistry.addSvgIcon('es', sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg'));

    }
  /* alerts: any[] = [
    {
      type: 'success',
      msg: '<strong>Privacy policy</strong> Learn more about data collecting.',
      comp: 'register'
    }
  ];
  alert = this.alerts[0];
  onClosed(dismissedAlert: any): void {} */

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
