import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  title = 'Education';
  constructor(private titleService: Title) {}
  ngOnInit() { this.titleService.setTitle(this.title); }

}
