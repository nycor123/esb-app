import { Injectable } from '@angular/core';
import { CartItem } from './cart-item.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth-service';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class CartService {
    cartSubject = new Subject<CartItem[]>();
    cart: CartItem[] = [];

    constructor(
      private http: HttpClient
    ) {}

    loadCart() {
      this.cartSubject.next(this.cart);
    }

    addItemToCart(cartItem: CartItem) {
      const user = JSON.parse(localStorage.getItem('user'));
      let uid = user['uid'];
      let postUrl = 'https://esb-app-fe500.firebaseio.com/' + uid + '/cartItems.json';

      this.http
        .post<{ name: string }>(postUrl, cartItem)
        .subscribe(responseData => {
          console.log(responseData);
        });

      this.loadCart();
    }

    removeItemFromCart(cartItem: CartItem) {
      const user = JSON.parse(localStorage.getItem('user'));
      let uid = user['uid'];
      let deleteUrl = 'https://esb-app-fe500.firebaseio.com/' + uid + '/cartItems/' + cartItem.id + '.json';

      this.http
        .delete(deleteUrl)
        .subscribe(responseData => {
          console.log(responseData);
        })

      this.loadCart();
    }

    increaseCartItemQty(id: number) {
      let itemPrice = this.cart[id].price / this.cart[id].quantity;

      this.cart[id].quantity += 1;
      this.cart[id].price +=  itemPrice;
      this.cartSubject.next(this.cart);
    }

    decreaseCartItemQty(id: number) {
      let itemPrice = this.cart[id].price / this.cart[id].quantity;

      this.cart[id].quantity -= 1;
      this.cart[id].price -= itemPrice;
      this.cartSubject.next(this.cart);
    }

    setCartItems(cartItems: CartItem[]) {
      this.cart = cartItems;
      this.cartSubject.next(this.cart);
    }
}