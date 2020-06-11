import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SkillRate } from '../models/skill-rate';
import { SkillChip } from '../models/skill-chip';
/**
 * Skills component
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'Skills';
  constructor(private titleService: Title) {}
  ngOnInit() { this.titleService.setTitle(this.title); }

  langs: SkillRate[] = [
    { name: "C / C++", rate: 80 },
    { name: "C# / Razor", rate: 85 },
    { name: ".NET Core / ASP.NET / ADO.NET", rate: 88 },
    { name: "JavaScript / AngularJS / ReactJS", rate: 80 },
    { name: "JSON", rate: 85 },
    { name: "HTML5", rate: 95 },
    { name: "CSS/ SASS / SCSS", rate: 80 },
    { name: "Java", rate: 75 },
    { name: "Swift", rate: 55 },
    { name: "Objective-C", rate: 50 },
    { name: "Git", rate: 90 },
    { name: "Tex", rate: 82 },
    { name: "Bash", rate: 70 },
    { name: "Fortran 77 / 90", rate: 90 },
    { name: "SQL / NoSQL / MySQL / MS-SQL", rate: 78 },
    { name: "NCL", rate: 90 },
    { name: "Typescript / Angular / React", rate: 88 }
  ];

  envs: SkillChip[] = [

    { name: "Xcode", src: "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/ca/72/ba/ca72ba99-f72f-4210-0da5-47587ab10ac4/Xcode-85-220-0-4-2x.png/246x0w.png" },
    { name: "Visual Studio", src: "https://visualstudio.microsoft.com/wp-content/uploads/2019/06/BrandVisualStudioWin2019-3.svg" },
    { name: "Visual Studio Code", src: "https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png" },
    { name: "Android Studio", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png" },
    { name: "NetBeans", src: "https://netbeans.apache.org/images/apache-netbeans.svg" },
    { name: "Bash / sh / zsh", src: "assets/images/bash.png" },
    { name: "Azure", src: "https://portal.azure.com/favicon.ico" },
    { name: "Google Cloud Plattform", src: "https://www.gstatic.com/devrel-devsite/prod/v6d9a9c4ff910e26303d2496259d58a0deebff25b965fe32e6f4478e776a03445/cloud/images/favicons/onecloud/super_cloud.png" },
    { name: "Google Tag Manager", src: "https://ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png" },
    { name: "Google Firebase", src: "https://www.gstatic.com/devrel-devsite/prod/v6d9a9c4ff910e26303d2496259d58a0deebff25b965fe32e6f4478e776a03445/firebase/images/touchicon-180.png" },
    { name: "Google Analytics", src: "https://ssl.gstatic.com/analytics/20200609-00/app/static/analytics_standard_icon.png" },
    { name: "OutSystems", src: "https://www.outsystems.com/-/media/images/icons/favicon.png" }
  ];

  remove(env:SkillChip): void {
    const index = this.envs.indexOf(env);
    if (index >= 0) {
      this.envs.splice(index, 1);
    }
  }
}
