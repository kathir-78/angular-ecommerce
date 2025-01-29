import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
  <section  class="bg-white shadow-md rounded-xl p-6 flex flex-col flex-grow gap-6 relative h-full">
    <div class="absolute top-1 right-4">
    @if(product()?.stock) {
      <span class="text-green-500">{{product()?.stock}} only left</span>
    }
    @else {
      <span class="text-red-500">out of stock</span>
    }
    </div>
    <section class="mx-auto">
      <img [src]=product()?.image [alt]="product()?.title"  class="h-[100px] w-[200] object-contain">
    </section>
    <section class="flex flex-col flex-grow justify-between mt-2">
      <div class="text-md font-bold">
        {{product()?.title}}
      </div>
      <div class="text-sm pt-3">
        {{'₹' + product()?.price}}
      </div>
      <app-primary-button label="Add to Cart" class="mt-3" />
    </section>
  </section>
  `,
  styles: ``
})
export class ProductCardComponent {
 product = input<Product>();
}
