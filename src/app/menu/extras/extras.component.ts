import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  addOns = [
    {
      name: 'Grilled Patty',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '50'
    },
    {
      name: 'Chili Con Carne',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '20'
    },
    {
      name: 'Bacon',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '25'
    },
    {
      name: 'Sliced Cheese',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '10'
    },
    {
      name: 'Sliced Ham',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '15'
    },
    {
      name: 'Egg',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '15'
    },
    {
      name: 'Mushroom',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '15'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
