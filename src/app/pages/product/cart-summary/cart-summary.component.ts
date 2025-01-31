import { Component, inject } from '@angular/core';
import { ProductCartService } from '../../../services/product-cart.service';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
  @if(cartService.cartSummary() != 0) {
    <section class="bg-slate-100  p-6 flex flex-col rounded-2xl shodow-md">
      <div class="text-2xl mb-4">Order Summary</div>
      <section class="flex flex-row justify-around">
        <div>
          Total
        </div>
        <div><span class="font-bold">{{'₹ ' + cartService.cartSummary()}}</span></div>
      </section>
      <app-primary-button label="Place Order" class="flex justify-center pt-3"/>
    </section>
  }
  @else {
    <section class="flex flex-col items-center">
      <div class="font-bold text-2xl">Nothing in the cart</div>
      <div class="bg-amber-400 mt-2 px-2 rounded-2xl" routerLink ="/">click to purchase</div>
    </section>
  }
  `,
  styles: ``
})
export class CartSummaryComponent {

  cartService = inject(ProductCartService);

}

