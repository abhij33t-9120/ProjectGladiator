import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>('');

  constructor() {}
  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

  increaseQty(id: number): any {
    const index = this.cartItemList.findIndex(
      (item: any) => item.product_id === id
    );
    this.cartItemList[index].quantity++;
    this.cartItemList[index].total =
      this.cartItemList[index].baseprice * this.cartItemList[index].quantity;
    // this.productList.next(null);
    this.productList.next(this.cartItemList);
    // return this.productList.asObservable();
  }

  decreaseQty(id: number): any {
    const index = this.cartItemList.findIndex(
      (item: any) => item.product_id === id
    );
    if (this.cartItemList[index].quantity > 1) {
      this.cartItemList[index].quantity--;
    }
    this.cartItemList[index].total =
      this.cartItemList[index].baseprice * this.cartItemList[index].quantity;
    // this.productList.next(null);
    this.productList.next(this.cartItemList);
    // return this.productList.asObservable();
  }
}
