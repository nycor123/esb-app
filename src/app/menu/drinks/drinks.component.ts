import { Component, OnInit } from '@angular/core';
import { DrinksService } from './drinks.service';
import { Drink } from './drink.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  drinks: Drink[];

  constructor(
    private drinksService: DrinksService
  ) { }

  ngOnInit(): void {
    this.drinks = this.drinksService.getDrinks();
  }

}
