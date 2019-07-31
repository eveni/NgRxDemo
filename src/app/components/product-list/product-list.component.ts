import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<any>
  name: Observable<any>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {

    this.products = this.store.select((state: any) => state.productsR.products)
    this.name = this.store.select((state: any) => state.productsR.username)

  }
}
