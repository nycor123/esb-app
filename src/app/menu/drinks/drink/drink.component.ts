import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Drink } from '../drink.model';
import { DrinksService } from '../drinks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {
  drink: Drink;
  drinkId: number;
  drinkForm: FormGroup;
  size: string;
  drinkSizes = ['small', 'medium', 'large'];

  constructor(
    private route: ActivatedRoute,
    private drinksService: DrinksService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.drinkId = +params['id'];
          this.drink = this.drinksService.getDrink(this.drinkId);
          this.initForm();
          this.drinkForm.controls['drinkSize'].setValue('small');
          this.size = this.drinkForm.controls['drinkSize'].value;
        }
      );
  }

  initForm() {
    this.drinkForm = new FormGroup({
      'drinkSize': new FormControl(),
      'specialInstructions': new FormControl(),
      'quantity': new FormControl(1, Validators.required)
    });
  }

  onSubmit() {
    let cartItem = {
      ...this.drinkForm.value,
      name: this.drink.name,
      price: this.drink.price[this.size] * this.drinkForm.controls['quantity'].value
    };

    console.log(cartItem);
    this.router.navigate(['menu']);
  }

  onIncreaseQuantity() {
    this.drinkForm.controls['quantity'].patchValue(this.drinkForm.controls['quantity'].value + 1);
  }

  onDecreaseQuantity() {
    this.drinkForm.controls['quantity'].patchValue(this.drinkForm.controls['quantity'].value - 1);
  }

  onDrinkSizeChange() {
    this.size = this.drinkForm.controls['drinkSize'].value;
  }

}
