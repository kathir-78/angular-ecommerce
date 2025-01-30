import { Injectable, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  private cart = signal<Product []>([]);

  addProduct(product: Product) {
    this.cart.set([...this.cart(), product]);
    console.log(this.cart);
  }

  showProduct() {
    return this.cart().length;
  }

}
