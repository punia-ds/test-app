import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MandiService {
  mandiDetails = new BehaviorSubject(null);
  allMarkets = new Subject();

  private url = `https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=${environment.mandiApiKey}&format=json&limit=1000&offset=0&filters[state]=Haryana&fields=district,market,modal_price,commodity`;

  private httpHeaders = new HttpHeaders({
    accept: 'application/json, text/plain, */*',
    'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
  });
  constructor(private http: HttpClient) {}

  getMandiDetails() {
    return this.http.get(this.url, { headers: this.httpHeaders });
  }
}
