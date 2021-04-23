import { Injectable } from '@angular/core';
import { Store } from '../_models/Store';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'https://localhost:44348/api/stores/'
  stores: Store[];

  constructor(private http: HttpClient) { }

  getStores() {
    return this.http.get<Store[]>(this.baseUrl);
  }
  
  getStore(id: number)   {
    return this.http.get<Store>(this.baseUrl + id);
  }
  
  addStore(store: Store) {
    return this.http.post(this.baseUrl, store);
  }
  
  deleteStore(id) { 
    return this.http.delete(this.baseUrl + id);
  }
  
  editStore(id: number, store: Store) {    
    return this.http.put<Store>(this.baseUrl + id, store);
  }
}
