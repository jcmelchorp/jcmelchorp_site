import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * Wellcome component
 */
@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.scss']
})
export class WellcomeComponent implements OnInit {
  constructor(public titleService: Title) { }

  ngOnInit(): void {
  }

}
