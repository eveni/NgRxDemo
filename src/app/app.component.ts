import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './models/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store:Store<AppState>){
    this.store.select((s:any) => s.productsR).subscribe(state => console.log("Currnet State", state))
  }
  title = 'NgRxDemo';
}
