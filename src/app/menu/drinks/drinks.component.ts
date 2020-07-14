import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks = [
    {
      name: 'Pepsi',
      imgUrl: '../assets/img/drinkPlaceholder.png',
      price: '20'
    },
    {
      name: 'Mountain Dew',
      imgUrl: '../assets/img/drinkPlaceholder.png',
      price: '20'
    },
    {
      name: 'Lipton Iced Tea',
      imgUrl: '../assets/img/drinkPlaceholder.png',
      price: '25'
    },
    {
      name: 'Mineral Water',
      imgUrl: '../assets/img/drinkPlaceholder.png',
      price: '15'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
