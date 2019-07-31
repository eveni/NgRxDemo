import { AppState } from "./models/state";
import * as ACTIONS from './actions'
import { createReducer, on } from '@ngrx/store';

const initialState: AppState = {
  username: "andrew",
  products: [
    { title: "iPhone 7", price: 700 },
    { title: "Galaxy S4", price: 400 }
  ],
  card: []
}

export const productsR = createReducer(initialState,
  on(ACTIONS.addToCard, (state, props) => {
    return {
      ...state,
      card: [
        ...state.card,
        props.product
      ]
    }
  })
)

export const MainReducer = { productsR }