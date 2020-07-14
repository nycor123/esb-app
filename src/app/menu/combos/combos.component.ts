import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  combos = [
    {
      name: 'Breakfast Special',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '140'
    },
    {
      name: 'Chili Burger Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '115'
    },
    {
      name: 'Hawaiian Burger Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '150'
    },
    {
      name: 'Hungarian Sausage Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '120'
    },
    {
      name: 'Single Quarter Pounder Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '105'
    },
    {
      name: 'Double Quarter Pounder Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '140'
    },
    {
      name: 'Triple Quarter Pounder Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '180'
    },
    {
      name: 'Double Cheese Quarter Pounder Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '115'
    },
    {
      name: 'Bacon Mushroom & Cheese Burger Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '140'
    },
    {
      name: 'Barbeque Bacon Meal',
      imgUrl: '../assets/img/comboPlaceholder.png',
      price: '140'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
