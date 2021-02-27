import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseUrl = 'https://localhost:44348/api/Products/'
    products: Product[];

    constructor(private http: HttpClient) { }

    getProducts() {
      return this.http.get<Product[]>(this.baseUrl);
      }

    getProduct(id: number)   {
      return this.http.get<Product>(this.baseUrl + id);
    }

    addProduct(product: Product) {
      return this.http.post(this.baseUrl, product);
    }

    deleteProduct(id) {   
      return this.http.delete(this.baseUrl + id);
    }

    editProduct(product: Product) {  
      return this.http.put<Product>(this.baseUrl, product);
    }
}
