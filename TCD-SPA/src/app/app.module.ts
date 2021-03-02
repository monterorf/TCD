import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryService } from './_services/category.service';


import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductNewComponent } from './Products/product-new/product-new.component';
import { ProductEditComponent } from './Products/product-edit/product-edit.component';
import { CategoryListComponent } from './Products/category-list/category-list.component';
import { CategoryNewComponent } from './Products/category-new/category-new.component';
import { CategoryEditComponent } from './Products/category-edit/category-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ CategoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
