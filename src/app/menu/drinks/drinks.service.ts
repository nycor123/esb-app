import { Injectable } from '@angular/core';
import { Drink } from './drink.model';

@Injectable({ providedIn: 'root' })
export class DrinksService {
    drinks: Drink[] = [
        {
          id: 0,
          name: 'Pepsi',
          imgUrl: '../assets/img/drinkPlaceholder.png',
          price: {
            small: 20,
            medium: 30,
            large: 40
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 1,
          name: 'Mountain Dew',
          imgUrl: '../assets/img/drinkPlaceholder.png',
          price: {
            small: 20,
            medium: 30,
            large: 40
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 2,
          name: 'Lipton Iced Tea',
          imgUrl: '../assets/img/drinkPlaceholder.png',
          price: {
            small: 25,
            medium: 35,
            large: 45
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 3,
          name: 'Mineral Water',
          imgUrl: '../assets/img/drinkPlaceholder.png',
          price: {
            small: 15,
            medium: 25,
            large: 35
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
          id: 4,
          name: 'Fiji',
          imgUrl: '../assets/img/drinkPlaceholder.png',
          price: {
            small: 30,
            medium: 40,
            large: 50
          },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        }
    ];

    getDrinks() {
        return this.drinks.slice();
    }

    getDrink(id: number) {
      return this.drinks[id];
    }
}