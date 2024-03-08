import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  addRequest(data: any) {
    return this.http.post(`${environment.baseUrl}/request/add`, data);
  }

  allRequests() {
    return this.http.get(`${environment.baseUrl}/request/all`);
  }
}
