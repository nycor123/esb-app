import { Component } from '@angular/core';

@Component({
    selector: 'app-burgers',
    templateUrl: './burgers.component.html',
    styleUrls: ['./burgers.component.css']
})
export class BurgersComponent {
    burgers = [
        {
          name: 'Single Quarter Pounder',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '55'
        },
        {
          name: 'Double Quarter Pounder',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '90'
        },
        {
          name: 'Triple Quarter Pounder',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '130'
        },
        {
          name: 'Double Cheese Quarter Pounder',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '65'
        },
        {
          name: 'Bacon Mushroom and Cheese',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '90'
        },
        {
          name: 'Barbeque Bacon',
          imgUrl: "../assets/img/burgerPlaceholder.png",
          price: '90'
        }
    ];
}