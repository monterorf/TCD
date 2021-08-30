import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductNewComponent } from './Products/product-new/product-new.component';
import { ProductEditComponent } from './Products/product-edit/product-edit.component';
import { CategoryListComponent } from './Products/category-list/category-list.component';
import { CategoryNewComponent } from './Products/category-new/category-new.component';
import { CategoryEditComponent } from './Products/category-edit/category-edit.component';
import { StoreListComponent } from './Stores/store-list/store-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { fromEventPattern } from 'rxjs';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: ProductListComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'stores', component: StoreListComponent, canActivate: [AuthGuard] },
      { path: 'category-new', component: CategoryNewComponent },
      { path: 'category-edit/:id', component: CategoryEditComponent },
      { path: 'product-new', component: ProductNewComponent },
      { path: 'product-edit/:id', component: ProductEditComponent },      
    ]
 },
 { path: '**', redirectTo: 'home', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
