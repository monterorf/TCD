import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/Category';
import { Product } from 'src/app/_models/Product';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';

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

    this.router.navigate(['comercial/products']).then(() => {
      window.location.reload();
    });
  }

}
