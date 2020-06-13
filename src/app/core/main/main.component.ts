import { Component, OnInit } from '@angular/core';
/**
 * Main component
 */
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dismissible = true;
  defaultAlerts: any[] = [
    {
      type: 'info',
      msg: `Actualmente contratado`
    },
    {
      type: 'success',
      msg: `Disponible para contrataciones`
    },
    {
      type: 'danger',
      msg: `Sitio en consturcción`
    }
  ];
  alert = this.defaultAlerts[2];
  onClosed(dismissedAlert: any): void {}

  constructor() {}

  ngOnInit(): void {
  }

}
