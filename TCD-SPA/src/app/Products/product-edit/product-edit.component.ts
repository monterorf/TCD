import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/_services/product.service';
import { Product } from 'src/app/_models/product';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  id: number;
  private sub: any;
  product: Product;
  editProductForm: FormGroup;

  constructor(private route: ActivatedRoute, private productService: ProductService,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

   this.id = +this.route.snapshot.paramMap.get('id');
   this.createProductForm();

   this.loadProduct(this.id);

  }


  loadProduct(id: number) {    
    this.productService.getProduct(id).subscribe((product: Product) => {      
      this.product = product;
    });       
  }

  createProductForm() {
    this.editProductForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(50)]],
      description: ['', Validators.maxLength(100)],     
    });
  }

  editProduct(product: Product) {
    this.productService.editProduct(product).subscribe(() => {
    });
    this.router.navigate(['home']).then(() => {
      window.location.reload();
    });
    }

}
