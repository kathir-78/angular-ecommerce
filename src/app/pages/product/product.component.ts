import { Component, inject, signal } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductCartService } from '../../services/product-cart.service';

@Component({
  selector: 'app-product',
  imports: [ProductCardComponent],
  template: `
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-2 m-8">
  @for(product of products.products(); track product.id) {
        <app-product-card   [product]=product />
  }
</div>
  `,
  styles: ``
})
export class ProductComponent {

  products = inject(ProductCartService);
  // products = signal<Product []>([]);

//   products = signal<Product []>([ 
//       {
//         id: 1,
//         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         price: 109.95,
//         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         stock: 10
//       },
//       {
//         id: 2,
//         title: "Mens Casual Premium Slim Fit T-Shirts ",
//         price: 22.3,
//         image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         stock: 0

//       },
//       {
//         id: 3,
//         title: "Mens Cotton Jacket",
//         price: 55.99,
//         image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         stock: 8
//       },
//       {
//         id: 4,
//         title: "Mens Casual Slim Fit",
//         price: 15.99,
//         image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//         stock: 4

//       },
// ]);

}
