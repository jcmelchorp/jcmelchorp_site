import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PrivacyComponent } from '../privacy/privacy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title = 'Register';
  registerForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    private titleService: Title
    ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  alerts: any[] = [
    {
      type: 'info',
      msg: '<strong>Privacy policy</strong> Learn more about the data we collect.',
      comp: 'register'
    }
  ];
  alert = this.alerts[0];
  onClosedAlert(dismissedAlert: any): void {}

  modalPrivacy(){
    const dialogRef = this.dialog.open(PrivacyComponent);
    this.onClosedAlert(this.alert)
  }

  onRegister() {}

}
