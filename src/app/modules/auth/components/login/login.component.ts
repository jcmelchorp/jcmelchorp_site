import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  facebook = faFacebook;
  google = faGoogle;
  twitter = faTwitter;
  loginForm: FormGroup;
  constructor(
    private titleService: Title
    ) { }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onLogin() {}
  onSocialLogin(authProvider: string) {}
}
