import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private alertSer: AlertService,
    private router: Router,
    private loadingSer: LoadingService
  ) {}

  login(data: any) {
    return this.http.post(`${environment.baseUrl}/user/login`, data);
  }

  tokenRes: any;
  matchToken(token: string) {
    this.loadingSer.presentLoading('Please Wait');
    return this.http
      .post(`${environment.baseUrl}/user/token`, { token })
      .subscribe((res) => {
        this.tokenRes = res;
        if (this.tokenRes.status != 200) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          this.loadingSer.dismissLoading();
          this.alertSer.presentAlert('Login', 'Error', this.tokenRes.message);
          this.router.navigate(['/login']);
        } else {
          localStorage.setItem('user', JSON.stringify(this.tokenRes.message));
          this.router.navigate(['/dashboard']);
          setTimeout(() => {
            this.loadingSer.dismissLoading();
          }, 700);
        }
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
