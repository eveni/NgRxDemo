import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/state';
import * as ACTIONS from '../../actions'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product
  constructor(private store: Store<AppState>) { }
  ngOnInit() { }

  add(product) {
    this.store.dispatch(ACTIONS.addToCard({ product }))
  }
}
