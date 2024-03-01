import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  constructor(private http: HttpClient) {}

  getDonationDetails() {
    return this.http.get(`${environment.baseUrl}/donor/all`);
  }

  addDonor(data: any) {
    return this.http.post(`${environment.baseUrl}/donor/add`, data);
  }
}
