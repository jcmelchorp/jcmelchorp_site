import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  title = 'Skills';
  constructor(private titleService: Title) {}
  ngOnInit() { this.titleService.setTitle(this.title); }
}
