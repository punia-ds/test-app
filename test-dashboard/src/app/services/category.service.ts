import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  addCat(data: any) {
    return this.http.post(`${environment.baseUrl}/category/add`, data);
  }

  getAllCats() {
    return this.http.get(`${environment.baseUrl}/category/all`);
  }

  getSingleCat(id: any) {
    return this.http.get(`${environment.baseUrl}/category/single/${id}`);
  }

  updateCat(data: any) {
    return this.http.put(`${environment.baseUrl}/category/update`, data);
  }

  updateCatStatus(data: any) {
    return this.http.put(`${environment.baseUrl}/category/status`, data);
  }

  deleteCat(id: any) {
    return this.http.delete(`${environment.baseUrl}/category/delete/${id}`);
  }
}
