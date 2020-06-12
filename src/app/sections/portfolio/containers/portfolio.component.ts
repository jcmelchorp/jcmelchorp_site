import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Site } from '../models/site';
/**
 * Portfolio component
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  title = 'Portfolio';
  constructor(private titleService: Title) { }
  ngOnInit() { this.titleService.setTitle(this.title); }

  sites: Site[] = [
    {
      name: 'COVID 19',
      url: 'https://juliomelchorpinto.github.io/covid19',
      hosting: 'Github Pages',
      imgUrl: 'https://juliomelchorpinto.github.io/covid19/screenshot02.png.png',
      description: 'Aplicación en tiempo real que conecta con API de datos y produce gráficos históricos por país de los principales marcadores de la pandemia por coronavirus. Implementa integración continua.',
      category: ['API client', 'React']
    }, {
      name: 'Coronavirus MX',
      url: 'https://coronavirus-mx.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://coronavirus-mx.web.app/assets/images/preview.png',
      description: 'Aplicación web construida en Angular 8 que conecta con diversas fuentes de datos para ofrecer un panorama estadístico mundial del avance de la pandemia debida al coronavirus. Ofrece ademas enlaces e información más relevante focalizada en la República Mexicana.',
      category: ['API client', 'Material Design', 'Bootstrap']
    },
    {
      name: 'Angular Flex Layout',
      url: 'https://angular-flex-layout.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/angular-flex-layout01.png',
      description: '',
      category: ['template-layout']
    },
    {
      name: 'My Flex Layout',
      url: 'https://my-flex-layout.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/my-flex-layout01.png',
      description: 'Template for a \"Holy Grill\" layout using flex box.',
      category: ['template-layout']
    },
    {
      name: 'My Grid Layout',
      url: 'https://my-grid-layout.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/my-grid-layout01.png',
      description: 'Template for a \"Holy Grill\" layout using CSS3 grid legacy.',
      category: ['template-layout']
    },
    {
      name: 'View Layer',
      url: 'https://view-layer.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/view-layer01.png',
      description: '',
      category: ['template-layout']
    },
    {
      name: 'Authgular',
      url: 'https://jmelchorp-mdb.web.app/',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/jmelchorp-mdb01.png',
      description: 'Aplicación panel en Angular 8, Bootstrap y Material Design con usuarios y roles de administración en Google Firebase. Inicio de sesión con correo electronico o redes sociales como Google, Facebook y Twitter .',
      category: ['template-admin']
    },
    {
      name: 'Grid Layout',
      url: 'https://jmelchorp-layout.web.app',
      hosting: 'Google Firebase',
      imgUrl: 'https://raw.githubusercontent.com/JulioMelchorPinto/jcmelchorp/master/src/assets/screenshots/jmelchorp-layout01.png',
      description: 'Aplicación web construida en Angular que funciona como plantilla para un layout clásico en desarrollo web.',
      category: ['template-layout']
    },
  ];
}
