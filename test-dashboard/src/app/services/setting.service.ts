import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  constructor(private http: HttpClient) {}

  addSetting(data: any) {
    return this.http.post(`${environment.baseUrl}/app/add`, data);
  }

  getSettings() {
    return this.http.get(`${environment.baseUrl}/app/all`);
  }

  updateSetting(data: any) {
    return this.http.put(`${environment.baseUrl}/app/update`, data);
  }

  getSetting(id: string) {
    return this.http.get(`${environment.baseUrl}/app/single/${id}`);
  }
}
