import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  card: Observable<any>

  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.card = this.store.select((state: any) => state.productsR.card)
  }
}
