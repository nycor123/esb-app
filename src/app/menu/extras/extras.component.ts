import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  extras = [
    {
      name: 'Chili Con Carne',
      imgUrl: '../assets/img/addOnPlaceholder.png',
      price: '20'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
