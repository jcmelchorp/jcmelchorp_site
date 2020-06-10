import { Component, OnInit, Inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SwUpdate } from '@angular/service-worker';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogAlert } from './sections/shared/viewmodels/dialog-alert';
import { AlertModalComponent } from './sections/shared/alert-modal/alert-modal.component';
/**
 * App component
 *
 * Main Component who passes routing to layouts and first declaration
 * of metadata in MetaServices and TitleService (from @angular/platform-browser).
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Title for the page component
   */
  title = 'Curriculum';
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
    private swUpdate: SwUpdate,
    public matDialog: MatDialog,
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'description', content: 'Curriculum vitae for Julio César Melchor Pinto' },
      { name: 'keywords', content: 'curriculum vitae, angular material, julio Melchor, julio melchor pinto, melchor' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Julio César Melchor Pinto' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' },
      { name: 'date', content: '2020-06-06', scheme: 'YYYY-MM-DD' },
      { name: 'application-name', content: 'Portfolio' },
      { name: 'apple-mobile-web-app-status-bar', content: 'black-translucent' },
      { name: 'theme-color', content: 'white' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      // OpenGraph metatags
      { property: 'og:title', content: 'Julio Melchor' },
      { property: 'og:type', content: 'profile' },
      { property: 'profile:first_name', content: 'Julio' },
      { property: 'profile:last_name', content: 'Melchor' },
      { property: 'profile:username', content: 'jcmelchorp' },
      { property: 'profile:gender', content: 'male' },
      { property: 'og:site_name', content: 'Personal Portfolio' },
      { property: 'og:url', content: 'https://jcmelchorp.web.app' },
      { property: 'og:image:url', content: 'https://jcmelchorp.web.app/assets/images/screenshot01.png' },
      { property: 'og:image:secure_url', content: 'https://jcmelchorp.web.app/assets/images/screenshot02.png' },
      { property: 'og:image:alt', content: 'Website view example' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:description', content: 'Curriculum vitae for Julio César Melchor Pinto' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { charset: 'UTF-8' }
    ]);
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(async () => {
        const alert = await this.matDialog.open(AlertModalComponent, {
          data: {
            header: `This app has been updated!`,
            message: `Newer version of the app is available. It's a quick refresh away!`
          }
        });
      });
    }
  }
}
