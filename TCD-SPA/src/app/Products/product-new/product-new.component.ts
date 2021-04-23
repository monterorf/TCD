import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_models/product';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/_services/category.service';
import { Category } from 'src/app/_models/Category';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product;
  categories: Category[];
  productForm: FormGroup;
  constructor(private productService:ProductService, private fb: FormBuilder,
    private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.createProductForm();
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

  createProductForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(50)]],   
      description: ['', Validators.maxLength(100)],      
      categoryId: ['',Validators.required],
    });
  }

  createProduct() {
    this.product = Object.assign({}, this.productForm.value);
    this.productService.addProduct(this.product).subscribe(() => {
      console.log('Product has been created successfully');
    }, error => {
        console.log('There has been an issue creating the product');
    });

    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
  }
}
