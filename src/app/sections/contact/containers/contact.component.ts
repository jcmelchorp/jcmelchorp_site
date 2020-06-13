import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * Contact component
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  title = 'Contact';
  constructor(private titleService: Title) {}
  ngOnInit() {
    setTimeout(() => {
      this.titleService.setTitle(this.title);
    });
   }

}
