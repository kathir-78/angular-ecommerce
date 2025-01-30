import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../components/primary-button/primary-button.component";
import { ProductCartService } from '../services/product-cart.service';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `
     <div class=" bg-sky-50 px-4 py-3 shadow-md flex justify-between items-center"> 
      <span class="text-xl">My Store</span>
      <app-primary-button [label]="'cart (' + cartService.showProduct() + ') '" />
     </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartService = inject(ProductCartService);
}

