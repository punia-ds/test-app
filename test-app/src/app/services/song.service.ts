import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SongService {
  constructor(private http: HttpClient) {}

  getSong() {
    return this.http.get(`http://weareharyanvi.com:8000/status-json.xsl`);
  }
}
