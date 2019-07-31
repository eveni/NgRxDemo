import { Product } from './product';

export interface AppState {
  username: string
  products: Product[]
  card: Product[]
}