import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DonorService {
  constructor(private http: HttpClient) {}

  addDonor(data: any) {
    return this.http.post(`${environment.baseUrl}/donor/register`, data);
  }

  getDonors() {
    return this.http.get(`${environment.baseUrl}/donor/all`);
  }

  changeStatus(data: any) {
    return this.http.put(`${environment.baseUrl}/donor/update/status`, data);
  }
}
