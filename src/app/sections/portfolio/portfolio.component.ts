import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  title = 'Portfolio';
  constructor(private titleService: Title) {}
  ngOnInit() { this.titleService.setTitle(this.title); }

}
