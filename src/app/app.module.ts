import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HeaderComponent } from './header/header.component';
import { CategorySecondComponent } from './category-second/category-second.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryDetailsComponent,
    CategoryComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CategorySecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
