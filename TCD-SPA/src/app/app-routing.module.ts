import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewComponent } from './_components/comercial/products/product-new/product-new.component';
import { ProductEditComponent } from './_components/comercial/products/product-edit/product-edit.component';
import { ProductListComponent } from './_components/comercial/products/product-list/product-list.component';
import { CategoryListComponent } from './_components/comercial/products/category-list/category-list.component'
import { CategoryNewComponent } from './_components/comercial/products/category-new/category-new.component';




import { CategoryEditComponent } from './_components/comercial/products/category-edit/category-edit.component';
import { StoreListComponent } from './Stores/store-list/store-list.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { fromEventPattern } from 'rxjs';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { NotPageFoundComponent } from './_components/not-page-found/not-page-found.component';
import { ComercialComponent } from './_components/comercial/comercial.component';



const routes: Routes = [
  {path: '', component: RegisterComponent},
  { path: 'home', component: WelcomeScreenComponent },
  { path: 'comercial', component: ComercialComponent },
  { path: 'comercial/products', component: ProductListComponent },
  { path: 'comercial/products/categories', component: CategoryListComponent },
  { path: 'comercial/products/category-new', component: CategoryNewComponent },
  { path: 'comercial/products/product-new', component: ProductNewComponent },
  { path: 'comercial/products/product-edit/:id', component: ProductEditComponent },
  { path: 'comercial/products/category-edit/:id', component: CategoryEditComponent },

  { path: 'stores', component: StoreListComponent},
  

  { path: 'product-new', component: ProductNewComponent },

  { path: 'comercial',component: ComercialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
