import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../components/primary-button/primary-button.component";
import { ProductCartService } from '../services/product-cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
     <div class=" bg-sky-50 px-4 py-3 shadow-md flex justify-between items-center"> 
      <button class="text-xl font-bold shadow-md bg-blue-10 p-2 rounded-2xl" routerLink="/">My Store</button>
      <app-primary-button [label]="'cart (' + cartService.showProduct() + ') '"  routerLink="/cart" />
     </div>
  `,
  styles: ``
})
export class HeaderComponent {

  cartService = inject(ProductCartService);
}

