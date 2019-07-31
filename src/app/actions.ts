import { createAction, props } from '@ngrx/store';
import { Product } from './models/product';

export const addToCard = createAction('addToCard',
  props<{ product: Product }>()
)

export const removeFromCard = createAction('removeFromCard',
  props<{ product: Product }>()
)