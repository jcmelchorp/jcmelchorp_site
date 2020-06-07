import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Curriculum';
  constructor(
    private metaTagService: Meta,
    private titleService: Title,
  ){}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      { name: 'description', content: 'Curriculum vitae for Julio César Melchor Pinto' },
      { name: 'keywords', content: 'curriculum vitae, angular material, julio Melchor, julio melchor pinto, melchor' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Julio César Melchor Pinto' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, shrink-to-fit=no' },
      { name: 'date', content: '2020-06-06', scheme: 'YYYY-MM-DD' },
      { name: 'application-name', content:'Portfolio'},
      { name: 'apple-mobile-web-app-status-bar', content:'#000000'},
      { name: 'theme-color', content:'white' },
      { property:'og:title', content:'Julio Melchor'},
      { property:'og:type', content:'Personal'},
      { property:'og:site_name', content:'Personal Portfolio'},
      { property:'og:url', content:'https://jcmelchorp.web.app'},
      { property:'og:image', content:'assets/images/screenshot-mdb01.png'},
      { property:'og:description', content:'Curriculum vitae for Julio César Melchor Pinto'},
      { charset: 'UTF-8' }
    ]);
  }
}
