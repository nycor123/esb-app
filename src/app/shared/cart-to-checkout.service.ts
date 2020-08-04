import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../cart/cart-item.model';

@Injectable({providedIn: 'root'})
export class CartToCheckoutService {
    selectedCartItems = new Subject<CartItem[]>();
    items: CartItem[];

    setSelectedCartItems(cartItems: CartItem[]) {
        this.items = cartItems;
    }
}