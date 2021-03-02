import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/Category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

  deleteCategory(id: number) {    
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.categories.splice(this.categories.findIndex(p => p.id === id), 1);
      }, error => {
        console.log(error);
      });    
  }

}
