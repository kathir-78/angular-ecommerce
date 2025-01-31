import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductCartService {

  constructor() {
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.products.set(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  products = signal<Product []>([]);
  cart = signal<Product []>([]);

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
