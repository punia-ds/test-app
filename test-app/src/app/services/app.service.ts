import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appDetails$ = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient) {}

  getApp(appName: string) {
    return this.http.get(`${environment.baseUrl}/app/app/${appName}`);
  }
}
