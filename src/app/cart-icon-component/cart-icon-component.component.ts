import { Component, OnInit } from '@angular/core';
import { BookService } from './../book.service';


@Component({
  selector: 'app-cart-icon-component',
  templateUrl: './cart-icon-component.component.html',
  styleUrls: ['./cart-icon-component.component.scss']
})
export class CartIconComponentComponent implements OnInit {

  constructor(private bookService: BookService) { }

  products = [];

  ngOnInit() {
        this.products = this.bookService.getProducts();
  }

}
