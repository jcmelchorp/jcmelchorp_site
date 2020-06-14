import { Component } from '@angular/core';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { faSignInAlt, faGlobe, faCog, faUserTie, faConciergeBell, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faFilePdf, faSun } from '@fortawesome/free-regular-svg-icons';
import { ThemeService } from 'src/app/shared/services/theme.service';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
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
  globe = faGlobe;
  cog = faCog;
  userTie = faUserTie;
  concierge = faConciergeBell;
  paw = faPaw;
  print = faFilePdf;
  isDarkTheme: Observable<boolean>;

  constructor(
    public titleService: Title,
    private themeService: ThemeService,iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ) {
      iconRegistry.addSvgIcon('en', sanitizer.bypassSecurityTrustResourceUrl('assets/flags/en.svg'));
      iconRegistry.addSvgIcon('es', sanitizer.bypassSecurityTrustResourceUrl('assets/flags/es.svg'));

    }
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
