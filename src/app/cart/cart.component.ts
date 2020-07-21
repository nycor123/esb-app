import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartMargin: string;
  itemMarginLeft: string;

  cartItems = [
    {
      name: "Single Quarter Pounder",
      price: 120,
      quantity: 1,
      specialInstructions: "no onions",
      addons: [
        "Beef Patty",
        "Sliced Ham"
      ],
      extraInfo: 'Addons: Beef Patty, Sliced Ham'
    },
    {
      name: "Breakfast Special",
      price: 150,
      quantity: 1,
      specialInstructions: "",
      drink: "Fiji",
      extraInfo: 'Drink: Fiji'
    },
    {
      name: "Mountain Dew",
      price: 30,
      quantity: 1,
      specialInstructions: "",
      drinkSize: "medium",
      extraInfo: "Size: Medium"
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.updateMargins(window.screen.width);
  }

  @HostListener('window: resize', ['$event'])
  onResize($event) {
    let width = $event.target.innerWidth;
    this.updateMargins(width);
  }

  updateMargins(width: number) {
    if (width <= 576) {
      this.cartMargin = "mx-auto";
      this.itemMarginLeft = "ml-1"
    } 
    else if (width > 576) {
      this.cartMargin = "mr-3";
      this.itemMarginLeft = "ml-3"
    }
  }

}
