import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [

  {path:"category", component: CategoryComponent },
  {path:"category-details/:id", component: CategoryDetailsComponent },
  {path:"product-details/:productId", component: ProductDetailsComponent },
  {path:"", redirectTo:"category", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
