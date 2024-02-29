import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getRequests() {
    return this.http.get(`${environment.baseUrl}/request/all`);
  }

  updatePlaying(payload: any) {
    return this.http.put(`${environment.baseUrl}/request/update`, payload);
  }
}
