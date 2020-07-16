import { Injectable } from '@angular/core';
import { Addon } from './addon.model';

@Injectable({providedIn: 'root'})
export class AddonsService {
    addOns: Addon[] = [
        { 
            id: 0,
            name: 'Beef Patty',
            price: 50
        },
        {
            id: 1,
            name: 'Bacon',
            price: 25
        },
        { 
            id: 2,
            name: 'Sliced Cheese',
            price: 10
        },
        { 
            id: 3,
            name: 'Sliced Ham',
            price: 15
        },
        { 
            id: 4,
            name: 'Egg',
            price: 15
        },
        { 
            id: 5,
            name: 'Mushroom',
            price: 15
        }
    ];

    getAddons() {
        return this.addOns.slice();
    }
}