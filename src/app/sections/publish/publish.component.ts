import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

  title = 'Publications';
  constructor(private titleService: Title) {}
  ngOnInit() { this.titleService.setTitle(this.title); }

}
