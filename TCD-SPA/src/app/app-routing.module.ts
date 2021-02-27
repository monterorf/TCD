import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductNewComponent } from './Products/product-new/product-new.component';
import { ProductEditComponent } from './Products/product-edit/product-edit.component';

const routes: Routes = [
  { path: 'home', component: ProductListComponent },
  { path: 'product-new', component: ProductNewComponent },
  { path: 'product-edit/:id', component: ProductEditComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
