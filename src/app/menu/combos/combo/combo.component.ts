import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Combo } from '../combo.model';
import { CombosService } from '../combos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/custom-validators';
import { Drink } from '../../drinks/drink.model';
import { DrinksService } from '../../drinks/drinks.service';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  combo: Combo;
  id: number;
  comboForm: FormGroup;
  comboPrice: number;
  drinks: Drink[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private combosService: CombosService,
    private drinksService: DrinksService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.combo = this.combosService.getCombo(this.id);
          this.drinks = this.drinksService.getDrinks();
          this.initForm();
          this.comboPrice = this.combo.price;
          this.comboForm.controls['drink'].setValue('Pepsi');
        }
      );
  }

  initForm() {
    this.comboForm = new FormGroup({
        'drink': new FormControl(Validators.required),
        'specialInstructions': new FormControl(),
        'quantity': new FormControl(1, [Validators.required, CustomValidators.mustBePositiveNum])
    });
  }

  onSubmit() {
    let cartItem = {
      ...this.comboForm.value,
      name: this.combo.name,
      price: this.comboPrice * this.comboForm.controls['quantity'].value
    };
    console.log(cartItem);
    this.router.navigate(['/menu']);
  }

  onIncreaseQuantity() {
    this.comboForm.controls['quantity'].patchValue(this.comboForm.controls['quantity'].value + 1);
  }

  onDecreaseQuantity() {
    this.comboForm.controls['quantity'].patchValue(this.comboForm.controls['quantity'].value - 1);
  }

  onDrinkChange() {
    this.comboPrice = this.combo.price;

    let drink = this.drinks.find(drink => drink.name == this.comboForm.controls['drink'].value);

    if (drink.price['small'] > 20) {
      this.comboPrice += drink.price['small'] - 20;
    } 
  }

}
