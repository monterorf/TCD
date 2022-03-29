import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/Category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {
  category: Category;
  categoryForm: FormGroup;
  constructor(private categoryService:CategoryService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createCategoryForm();
  }

  createCategoryForm() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(50)]],   
      description: ['', Validators.maxLength(100)],      
    });
  }

  createCategory() {
    this.category = Object.assign({}, this.categoryForm.value);
    this.categoryService.addCategory(this.category).subscribe(() => {
      console.log('Category has been created successfully');
    }, error => {
        console.log('There has been an issue creating the category');
    });

    this.router.navigate(['comercial/products/categories']).then(() => {
      window.location.reload();
    });
  }

}
