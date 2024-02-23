import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  public get(key: string): any {
    return localStorage.getItem(key);
  }

  add(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  update(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  delete(key: string) {
    localStorage.removeItem(key);
  }
}
