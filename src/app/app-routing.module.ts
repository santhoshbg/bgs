import { FilterComponentComponent } from './filter-component/filter-component.component';
import { CartIconComponentComponent } from './cart-icon-component/cart-icon-component.component';
import {NgModule, Component} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {from} from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
import {AppComponent} from './app.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'cart', component: CartIconComponentComponent },
    { path: 'filter', component: FilterComponentComponent },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
