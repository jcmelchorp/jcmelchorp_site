import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/shared/services/theme.service';
/**
 * Info component
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

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

  constructor(
    private titleService: Title,
    public themeService: ThemeService,
    ) {}
  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    setTimeout(() => {
      this.titleService.setTitle(this.title);
    });
   }

   toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }


}
