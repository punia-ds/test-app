import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${environment.baseUrl}/post/all`);
  }

  getPostByCategory(category: string) {
    return this.http.get(`${environment.baseUrl}/post/category/${category}`);
  }

  getPostsByUser(addedBy: string) {
    return this.http.get(`${environment.baseUrl}/post/user/${addedBy}`);
  }

  singlePost(_id: string) {
    return this.http.get(`${environment.baseUrl}/post/single/${_id}`);
  }

  blockPost(_id: string) {
    return this.http.put(`${environment.baseUrl}/post/block/${_id}`, {});
  }

  deletePost(_id: string) {
    return this.http.put(`${environment.baseUrl}/post/delete/${_id}`, {});
  }
}
