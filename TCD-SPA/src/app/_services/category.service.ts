import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../_models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
baseUrl = 'https://localhost:44348/api/Categories/'
    categories: Category[];

    constructor(private http: HttpClient) { }

    getCategories() {
      return this.http.get<Category[]>(this.baseUrl);
      }

    getCategory(id: number)   {
      return this.http.get<Category>(this.baseUrl + id);
    }

    addCategory(category: Category) {
      return this.http.post(this.baseUrl, category);
    }

    deleteCategory(id) {   
      return this.http.delete(this.baseUrl + id);
    }

    editCategory(category: Category) {  
      return this.http.put<Category>(this.baseUrl, category);
    }
}
