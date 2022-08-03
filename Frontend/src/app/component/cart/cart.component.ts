import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CartItem } from 'src/app/shared/model/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any = [];
  public grandTotal!: number;
  isQauntityGreaterthanOne!: boolean;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  increment(id: number) {
    this.cartService.increaseQty(id).subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.grandTotal = Math.round(this.grandTotal);
    });
  }
  decrement(id: number) {
    this.cartService.decreaseQty(id).subscribe((res: any) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.grandTotal = Math.round(this.grandTotal);
    });
  }
}
