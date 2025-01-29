import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from "./pages/product/product.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductComponent],
  template: `
    <app-header></app-header>
    <app-product/>
  `,
  styles: ``,
})
export class AppComponent {
}
