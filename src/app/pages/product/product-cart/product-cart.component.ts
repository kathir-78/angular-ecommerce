import { Component, inject } from '@angular/core';
import { ProductCartService } from '../../../services/product-cart.service';
import { CartSummaryComponent } from "../cart-summary/cart-summary.component";

@Component({
  selector: 'app-product-cart',
  imports: [CartSummaryComponent],
  template: `

  <section class="mx-15 my-8 flex flex-col gap-10 h-full rounded-xl">
    <!-- @for(product of cartProduct.getProduct()(); track product.id) {
      <section class="bg-white p-5 flex justify-center items-center shadow-md h-full">
        <div class="flex items-center flex-col sm:flex-row w-full">
          <div>
              <img [src]="product.image" [alt]="product.title" class="h-[50px] w-[50px] object-contain rounded-full shadow-amber-50">
          </div>
          <div class="ml-10 sm:block">
              <h3 class="font-bold">{{ product.title }}</h3>
              <p class="pt-1">{{'₹ ' +  product.price }}</p>
          </div>
        </div>
        <div class="sm:flexflex-colw-full">
          <button class="bg-white rounded-2xl px-4 p-2 hover:bg-gray-400 shadow-md"  (click)="cartProduct.removeProduct(product.id)" >remove</button>
        </div>
      </section>
    }
  </section> -->
 <header>
  <h2 class="font-bold text-2xl">
    Shopping Cart
  </h2>
 </header>
  <section class="flex flex-col gap-10 h-full rounded-xl">
    @for(product of cartProduct.getProduct()(); track product.id) {
      <section class="bg-white flex flex-col sm:flex-row justify-between items-center shadow-md h-full p-6">
        <div class="flex items-center flex-col sm:flex-row w-full">
          <div>
              <img [src]="product.image" [alt]="product.title" class="h-[50px] w-[50px] object-contain rounded-full shadow-amber-50">
          </div>
          <div class="ml-10 sm:block">
              <h3 class="font-bold">{{ product.title }}</h3>
              <p class="pt-1">{{'₹ ' +  product.price }}</p>
          </div>
        </div>
        <div class="mt-4 md:pr-5 sm:mt-0">
          <button class="bg-amber-300 rounded-2xl px-4 p-2 hover:opacity-90" (click)="cartProduct.removeProduct(product.id)">remove</button>
        </div>
      </section>
    }
  </section>
  <app-cart-summary/>
  `,
  styles: ``
})
export class ProductCartComponent {
  cartProduct = inject(ProductCartService);
}
