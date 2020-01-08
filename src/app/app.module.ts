import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { HeaderComponent } from './header/header.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { CartIconComponentComponent } from './cart-icon-component/cart-icon-component.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { ShoppingListComponentComponent } from './shopping-list-component/shopping-list-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { ProductSearchPipe } from './product-search.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchComponent,
    HeaderComponent,
    SearchComponentComponent,
    CartIconComponentComponent,
    FilterComponentComponent,
    ShoppingListComponentComponent,
    FooterComponentComponent,
    ProductSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
