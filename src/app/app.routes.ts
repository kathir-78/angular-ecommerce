import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductCartComponent } from './pages/product/product-cart/product-cart.component';

export const routes: Routes = [

    {
        path: '',
        component: ProductComponent
    },

    {
        path: 'cart',
        component: ProductCartComponent
    }

];
