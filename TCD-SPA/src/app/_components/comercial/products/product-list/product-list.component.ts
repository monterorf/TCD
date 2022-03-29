import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../_models/Product';
import { ProductService } from './../../../../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private http: HttpClient, private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    })
  }

  deleteProduct(id: number) {    
      this.productService.deleteProduct(id).subscribe(() => {
        this.products.splice(this.products.findIndex(p => p.id === id), 1);
      }, error => {
        console.log(error);
      });    
  }

}
