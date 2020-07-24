import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators'
import { CartItem } from '../cart/cart-item.model';
import { CartService } from '../cart/cart.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(
        private http: HttpClient,
        private cartService: CartService
    ) {}

    fetchUserCartItems() {
        const user = JSON.parse(localStorage.getItem('user'));
        let uid = user['uid'];
        let getUrl = 'https://esb-app-fe500.firebaseio.com/' + uid + '/cartItems.json';
  
        return this.http
        .get<{ [key: string]: CartItem }>(getUrl)
        .pipe(
            map(responseData => {
                const cartItemsArray: CartItem[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        cartItemsArray.push({ ...responseData[key], id: key });
                    }
                }
                return cartItemsArray;
            }),
            tap(cartItems => {
                this.cartService.setCartItems(cartItems);
            })
        );
    }

    deleteUserCartItem(cartItem: CartItem) {
      const user = JSON.parse(localStorage.getItem('user'));
      let uid = user['uid'];
      let deleteUrl = 'https://esb-app-fe500.firebaseio.com/' + uid + '/cartItems/' + cartItem.id + '.json';

      return this.http.delete(deleteUrl);
    }
}