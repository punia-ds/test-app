import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RadioService {
  constructor(private http: HttpClient) {}

  addRadio(data: any) {
    return this.http.post(`${environment.baseUrl}/radio/add`, data);
  }

  getRadios() {
    return this.http.get(`${environment.baseUrl}/radio/all`);
  }

  getRadioByCategory(id: any) {
    return this.http.get(`${environment.baseUrl}/radio/category/${id}`);
  }

  getSingleRadio(id: any) {
    return this.http.get(`${environment.baseUrl}/radio/single/${id}`);
  }

  updateRadioStatus(data: any) {
    return this.http.put(`${environment.baseUrl}/radio/status`, data);
  }

  deleteRadio(id: any) {
    return this.http.delete(`${environment.baseUrl}/radio/delete/${id}`);
  }
}
