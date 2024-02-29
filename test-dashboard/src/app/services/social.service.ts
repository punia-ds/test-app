import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  constructor(private http: HttpClient) {}

  addSocial(data: any) {
    return this.http.post(`${environment.baseUrl}/social/add`, data);
  }

  updateSocial(data: any) {
    return this.http.put(`${environment.baseUrl}/social/update`, data);
  }

  getSocials() {
    return this.http.get(`${environment.baseUrl}/social/all`);
  }
}
