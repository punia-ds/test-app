import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  baseUrl: any = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getJokes() {
    return this.http.get(`${this.baseUrl}/post/category/jokes`);
  }
  getHistory() {
    return this.http.get(`${this.baseUrl}/post/category/history`);
  }
}
