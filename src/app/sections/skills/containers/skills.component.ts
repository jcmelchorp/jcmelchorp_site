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
    { name: 'ASP.NET / ADO.NET', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/dot-net/dot-net-original.svg', rate: 88 },
    { name: '.NET Core', src: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg', rate: 88 },
    { name: 'JavaScript', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/javascript/javascript-original.svg', rate: 80 },
    { name: 'C / C++', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/cplusplus/cplusplus-original.svg', rate: 80 },
    { name: 'C# / Razor', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/csharp/csharp-original.svg', rate: 85 },
    { name: 'JSON', src: 'https://raw.githubusercontent.com/leopiccionia/programmicons/master/src/json.svg', rate: 85 },
    { name: 'HTML5', src: 'https://cdn.rawgit.com/konpa/devicon/master/icons/html5/html5-plain.svg', rate: 95 },
    { name: 'CSS3', src: 'https://cdn.rawgit.com/konpa/devicon/master/icons/css3/css3-plain.svg', rate: 80 },
    { name: 'SASS / SCSS', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/sass/sass-original.svg', rate: 80 },
    { name: 'Java', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/java/java-original.svg', rate: 75 },
    { name: 'Swift', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/swift/swift-original.svg', rate: 55 },
    { name: 'Objective-C', src: 'https://raw.githubusercontent.com/fizzed/font-mfizz/master/src/svg/objc.svg', rate: 50 },
    { name: 'Git', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/git/git-original.svg', rate: 90 },
    { name: 'TeX', src: 'https://upload.wikimedia.org/wikipedia/commons/9/95/TeXShop_icon.png', rate: 82 },
    { name: 'Fortran 77 / 90', src: 'https://krvajalm.gallerycdn.vsassets.io/extensions/krvajalm/linter-gfortran/2.2.1/1590078791788/Microsoft.VisualStudio.Services.Icons.Default', rate: 90 },
    { name: 'MySQL', src: 'https://raw.githubusercontent.com/drakon88/devicon/master/icons/mysql/mysql-original.svg', rate: 65 },
    { name: 'SQLite', src: 'https://raw.githubusercontent.com/Thomas-A-Reinert/WebDev-Icons/master/src/SVG/sqllite.svg', rate: 70 },
    { name: 'Microsoft SQL Server', src: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server.svg', rate: 60 },
    { name: 'NCL', src: 'https://www.ncl.ucar.edu/Images/NCLLogoWeb.jpg', rate: 90 },
    { name: 'SSH', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/ssh/ssh-original.svg', rate: 75 },
    { name: 'Typescript', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/typescript/typescript-original.svg', rate: 88 },
    { name: 'Bootstrap', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/bootstrap/bootstrap-plain.svg', rate: 90 },
    { name: 'Zurb Foundation', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/foundation/foundation-original.svg', rate: 68 },
    { name: 'Angular', src:'https://angular.io/assets/images/logos/angular/angular.svg', rate: 90 },
    { name: 'AngularJS', src:'https://cdn.rawgit.com/konpa/devicon/master/icons/angularjs/angularjs-plain.svg', rate: 90 },
    { name: 'JQuery', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/jquery/jquery-original.svg', rate: 65 },
    { name: 'NodeJS', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/nodejs/nodejs-original.svg', rate: 72 },
    { name: 'NPM', src:'https://raw.githubusercontent.com/konpa/devicon/master/icons/npm/npm-original-wordmark.svg', rate: 72 },
  ];

  envs: SkillChip[] = [
    { name: 'Windows', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/windows8/windows8-original.svg' },
    { name: 'MacOS', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/apple/apple-original.svg' },
    { name: 'Debian', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/debian/debian-original.svg' },
    { name: 'Debian', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/debian/debian-original.svg' },
    { name: 'Xcode', src: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/ca/72/ba/ca72ba99-f72f-4210-0da5-47587ab10ac4/Xcode-85-220-0-4-2x.png/246x0w.png' },
    { name: 'Visual Studio', src: 'https://visualstudio.microsoft.com/wp-content/uploads/2019/06/BrandVisualStudioWin2019-3.svg' },
    { name: 'Visual Studio Code', src: 'https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png' },
    { name: 'Android Studio', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png' },
    { name: 'Atom', src: 'https://raw.githubusercontent.com/Thomas-A-Reinert/WebDev-Icons/master/src/SVG/atom.svg' },
    { name: 'NetBeans', src: 'https://netbeans.apache.org/images/apache-netbeans.svg' },
    { name: 'Bash / sh / zsh', src: 'https://raw.githubusercontent.com/leopiccionia/programmicons/master/src/bash.svg' },
    { name: 'Azure', src: 'https://portal.azure.com/favicon.ico' },
    { name: 'Github', src: 'https://github.com/fluidicon.png' },
    { name: 'Docker', src: 'https://raw.githubusercontent.com/konpa/devicon/master/icons/docker/docker-original.svg' },
    { name: 'Google Cloud Plattform', src: 'https://www.gstatic.com/devrel-devsite/prod/v6d9a9c4ff910e26303d2496259d58a0deebff25b965fe32e6f4478e776a03445/cloud/images/favicons/onecloud/super_cloud.png' },
    { name: 'Google Tag Manager', src: 'https://ssl.gstatic.com/analytics-suite/header/suite/v2/Favicon_GTM_suite_16.png' },
    { name: 'Google Firebase', src: 'https://www.gstatic.com/devrel-devsite/prod/v6d9a9c4ff910e26303d2496259d58a0deebff25b965fe32e6f4478e776a03445/firebase/images/touchicon-180.png' },
    { name: 'Google Analytics', src: 'https://ssl.gstatic.com/analytics/20200609-00/app/static/analytics_standard_icon.png' },
    { name: 'OutSystems', src: 'https://www.outsystems.com/-/media/images/icons/favicon.png' }
  ];

  remove(env:SkillChip): void {
    const index = this.envs.indexOf(env);
    if (index >= 0) {
      this.envs.splice(index, 1);
    }
  }
}
