import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Publication } from '../models/publication';
/**
 * Publish component
 */
@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {
  title = 'Publications';
  constructor(private titleService: Title) { }
  ngOnInit() { this.titleService.setTitle(this.title); }
  publications: Publication[] = [
    {
      title: 'Mid-troposphere temperature anomaly on the Gulf of Mexico induced by El Niño',
      url: "https://ui.adsabs.harvard.edu/abs/2016EGUGA..18.2024V",
      imgUrl: "assets/images/eug.png",
      date: "APR-2016",
      journal: "EGU General Assembly Conference Abstracts",
      abstract: "Geophysical Research - EGU General Assembly 2016",
      language: "en",
      bibcode: "ADS ID: 2016EGUGA..18.2024V"
    },
    {
      title: 'Parameterization of latent heat released by condensation for using in a Global Thermodynamic Climate Model',
      url: "https://www.ems2016.eu/EMS2016_programme_book.pdf",
      imgUrl: "assets/images/ems.png",
      date: "15-FEB-2016",
      journal: "European Meteorological Society",
      abstract: "Memories of 16th EMS Annual Meeting & 11th European Conference on Applied Climatology (ECAC).",
      language: "en"
    },
    {
      title: 'Atmospheric response over Mexico and its adjacent seas to oceanic surface forcing, using a Global Thermodynamic Model during El Niño 1982-83, 1997-98, 2015-16',
      url: "https://www.ems2016.eu/EMS2016_programme_book.pdf",
      imgUrl: "assets/images/ems.png",
      date: "15-FEB-2016",
      journal: "European Meteorological Society",
      abstract: "Memories of 16th EMS Annual Meeting & 11th European Conference on Applied Climatology (ECAC).",
      language: "en"
    },
    {
      title: 'Seis preguntas sobre huracanes (para entenderlos mejor)',
      url: "https://www.youtube.com/watch?v=WsWBxLh4OaM",
      imgUrl: "assets/images/huracanes.png",
      date: "5-OCT-2015",
      journal: "Letras Libres",
      abstract: "¿Cómo funciona un huracán? ¿Se le puede predecir? ¿Qué; es la escala Saffir-Simpson? Nuestra videoletrilla de octubre aborda estas cuestiones básicas acerca de los huracanes, en un mes en que históricamente abundan tales fenómenos.",
      type: "video",
      language: "es"
    },
    {
      title: 'Predecir el futuro',
      url: "https://www.letraslibres.com/mexico-espana/predecir-el-futuro-meteorologico",
      imgUrl: "http://www.letraslibres.com/sites/default/files/files6/files/lluvia_0.jpg",
      date: "5-MAY-2015",
      journal: "Letras Libres",
      abstract: "Dadas las condiciones actuales de la ciencia y la tecnoloía, el uso de herramientas meteorológicas para observar variaciones en el clima puede, paradójicamente, nublar nuestro entendimiento del sistema climático.",
      type: "blog",
      language: "es"
    },
    {
      title: 'Avances en la reconstrucción del Modelo Termodinámico del Clima a escala global',
      url: "assets/images/seminario01.jpg",
      imgUrl: "assets/images/seminario01.jpg",
      date: "28-NOV-2014",
      journal: "",
      abstract: "Seminario del Dr. Julian Adem",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'El Modelo Termodinámico Global como laboratorio de clima',
      url: "",
      imgUrl: "assets/images/seminario02.jpg",
      date: "12-JUN-2015",
      journal: "",
      abstract: "Seminario del Dr. Julian Adem",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'El Modelo Termodinámico del Clima: Presente y futuro.',
      url: "http://www.pincc.unam.mx/4tocongreso/sedes_html/Julian%20Adem%20%204CNICC2014/rene_garduno_lopez.pdf",
      imgUrl: "assets/images/pincc.png",
      date: "OCT-2014",
      journal: "Programa de Investigación en Cambio Climático",
      abstract: "4to Congreso Nacional de Investigación en Cambio Climático del PINCC",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'Evaluación del grado de madurez de frutas y verduras por medios físicos',
      url: "",
      imgUrl: "assets/images/",
      date: "8-FEB-2006",
      journal: "Centro de Ciencias de la Materia Condensada - UNAM",
      abstract: "XI Simposio en Física de Materiales",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'Pronóstico estacional de temperatura y precipitación para el Hemisferio Norte usando el MTCA con énfasis en la República Mexicana.',
      url: "https://www.ugm.org.mx/bak/raugm/2012/docs/GEOS32-1_PRELIMINAR.pdf",
      imgUrl: "https://www.ugm.org.mx/bak/raugm/2012/img/poster/raugmPoster0614.jpg",
      date: "30-OCT-2012",
      journal: "GEOS, Vol. 32, No. 1",
      abstract: "Memorias del congreso de la Unión Geofísica Mexicana, A.C.",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'Evaluación de la maduración de frutos por técnicas de fotografía digital.',
      url: "http://www.smf.mx/wordpress/wp-content/uploads/2016/01/2006-cnf-memorias.pdf",
      imgUrl: "assets/images/2006-cnf-portada-mini.jpg",
      date: "OCT-2006",
      journal: "Sociedad Mexicana de Física",
      abstract: "Memorias del XLIX Congreso Nacional de Física de la Sociedad Mexicana de Física.",
      type: "ponencia",
      language: "es"
    },
    {
      title: 'Determinación del grado de madurez de frutas y hortalizas mediante técnicas acústicas.',
      url: "https://www.smf.mx/wordpress/wp-content/uploads/2016/01/2005-cnf.pdf",
      imgUrl: "assets/images/cnf-2005-Portada-mini.jpg",
      date: "OCT-2005",
      journal: "Sociedad Mexicana de Física",
      abstract: "Memorias del XLVIII Congreso Nacional de Física de la Sociedad Mexicana de Física.",
      type: "",
      language: "es"
    }
  ];
}
