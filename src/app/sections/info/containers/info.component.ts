import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
/**
 * Info component
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  title = 'Information';
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(private titleService: Title) { }
  ngOnInit() {
    setTimeout(() => {
      this.titleService.setTitle(this.title);
    });
   }

}
