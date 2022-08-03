import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RetailerLoginComponent } from './component/retailer-login/retailer-login.component';
import { LoginComponent } from './component/login/login.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { AddRetailerComponent } from './component/add-retailer/add-retailer.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import { RetailerComponent } from './component/retailer/retailer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MainProductComponent } from './component/main-product/main-product.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RetailerProfileComponent } from './component/retailer-profile/retailer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    RetailerLoginComponent,
    LoginComponent,
    AddProductComponent,
    AddRetailerComponent,
    AdminComponent,
    AdminLoginComponent,
    CardComponent,
    FooterComponent,
    RegisterComponent,
    RetailerComponent,
    CheckoutComponent,
    RetailerProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
