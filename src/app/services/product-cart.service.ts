import { Injectable, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  cart = signal<Product []>([

    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      stock: 10
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      stock: 0

    }
  ]);

  addProduct(product: Product) {
    this.cart.set([...this.cart(), product]);
    console.log(this.cart);
  }

  showProduct() {
    return this.cart().length;
  }

  getProduct() {
    return this.cart;
  }

  removeProduct( productId: Number) {
    this.cart.set(this.cart().filter(item => item.id !== productId));
  }

  isProductInCart(productId: Number) {
    return this.cart().some(item => item.id === productId);
  }

  cartSummary(): number {
    const currentCart = this.cart();
    if (!currentCart || currentCart.length === 0) {
        return 0;
    }
    return currentCart.reduce((total, item) => {
        return total + (item.price as number || 0);
    }, 0);
}

}
