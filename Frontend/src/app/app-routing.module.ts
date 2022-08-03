import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AddRetailerComponent } from './component/add-retailer/add-retailer.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminComponent } from './component/admin/admin.component';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsComponent } from './component/products/products.component';
import { RegisterComponent } from './component/register/register.component';
import { RetailerLoginComponent } from './component/retailer-login/retailer-login.component';
import { RetailerProfileComponent } from './component/retailer-profile/retailer-profile.component';
import { RetailerComponent } from './component/retailer/retailer.component';
import { AdminGuard } from './service/admin.guard';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'Signup',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [AdminGuard],
  },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'retailer-login', component: RetailerLoginComponent },
  { path: 'add-retailer', component: AddRetailerComponent },
  {
    path: 'retailer',
    component: RetailerComponent,
  },
  {
    path: 'retailer/:r_id',
    component: RetailerProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: 'add-product', component: AddProductComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
