import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryService } from './_services/category.service';
import { ProductService } from './_services/product.service';
import { StoreService } from './_services/store.service';

import { ProductListComponent } from './_components/comercial/products/product-list/product-list.component';
import { ProductNewComponent } from './_components/comercial/products/product-new/product-new.component';
import { ProductEditComponent } from './_components/comercial/products/product-edit/product-edit.component';
import { CategoryListComponent } from './_components/comercial/products/category-list/category-list.component';
import { CategoryNewComponent } from './_components/comercial/products/category-new/category-new.component';
import { CategoryEditComponent } from './_components/comercial/products/category-edit/category-edit.component';

import { NavComponent } from './nav/nav.component';
import { StoreListComponent } from './Stores/store-list/store-list.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NotPageFoundComponent } from './_components/not-page-found/not-page-found.component';
import { ComercialComponent } from './_components/comercial/comercial.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductNewComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryNewComponent,
    CategoryEditComponent,
    NavComponent,
    StoreListComponent,
    RegisterComponent,
    WelcomeScreenComponent,
    NotPageFoundComponent,
    ComercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [ CategoryService,
               ProductService, 
               StoreService              
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
