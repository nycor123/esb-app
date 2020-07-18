import { Injectable } from '@angular/core';
import { Burger } from './burger.model';

@Injectable({providedIn: 'root'})
export class BurgersService {

    burgers: Burger[] = [
        {
            id: 0,
            name: 'Single Quarter Pounder',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 55,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          },
          {
            id: 1,
            name: 'Double Quarter Pounder',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 90,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          },
          {
            id: 2,
            name: 'Triple Quarter Pounder',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 130,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          },
          {
            id: 3,
            name: 'Double Cheese Quarter Pounder',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 65,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          },
          {
            id: 4,
            name: 'Bacon Mushroom and Cheese',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 90,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          },
          {
            id: 5,
            name: 'Barbeque Bacon',
            imgUrl: "../assets/img/burgerPlaceholder.png",
            price: 90,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
          }
    ];

    getBurgers(): Burger[] {
        return this.burgers.slice();
    }

    getBurger(id: number) {
        return this.burgers[id];
    }
}