import { Injectable } from '@angular/core';
import { Combo } from './combo.model';

@Injectable({providedIn: 'root'})
export class CombosService {

    combos = [
        {
          id: 0,
          name: 'Breakfast Special',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 140,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 1,
          name: 'Chili Burger Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 115,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 2,
          name: 'Hawaiian Burger Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 150,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 3,
          name: 'Hungarian Sausage Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 120,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 4,
          name: 'Single Quarter Pounder Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 105,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 5,
          name: 'Double Quarter Pounder Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 140,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 6,
          name: 'Triple Quarter Pounder Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 180,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 7,
          name: 'Double Cheese Quarter Pounder Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 115,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 8,
          name: 'Bacon Mushroom & Cheese Burger Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 140,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 9,
          name: 'Barbeque Bacon Meal',
          imgUrl: '../assets/img/comboPlaceholder.png',
          price: 140,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        }
      ];

      getCombos(): Combo[] {
          return this.combos.slice();
      }

      getCombo(id: number): Combo {
        return this.combos[id];
      }
}