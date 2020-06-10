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
      type: 'success',
      msg: `Actualmente contratado`
    },
    {
      type: 'info',
      msg: `Disponible para contrataciones`
    },
    {
      type: 'danger',
      msg: `No Disponible`
    }
  ];
  alert = this.defaultAlerts[1];
  onClosed(dismissedAlert: any): void {}

  constructor() {}

  ngOnInit(): void {
  }

}
