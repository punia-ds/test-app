import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authSer: AuthService,
    private alertSer: AlertService,
    private router: Router,
    private loadingSer: LoadingService
  ) {}

  loginRes: any;
  tokenRes: any;
  login() {
    this.loadingSer.presentLoading('Please Wait');
    let formData = this.loginForm.value;

    this.authSer.login(formData).subscribe((res) => {
      this.loginRes = res;
      if (this.loginRes.status != 200) {
        this.loadingSer.dismissLoading();
        this.alertSer.presentAlert('Login', 'Error', this.loginRes.message);
      } else {
        this.loadingSer.dismissLoading();
        localStorage.setItem('token', this.loginRes.message);
      }
    });
  }

  ngOnInit() {
    this.validations();
    // auth token match
    this.authSer.matchToken(localStorage.getItem('token') || '');
  }

  private validations() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
