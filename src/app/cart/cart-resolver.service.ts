import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CartItem } from './cart-item.model';
import { CartService } from './cart.service';
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class CartResolverService implements Resolve<CartItem[]> {
    
    constructor(
        private cartService: CartService,
        private dataStorageService: DataStorageService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.dataStorageService.fetchUserCartItems();
    }
}