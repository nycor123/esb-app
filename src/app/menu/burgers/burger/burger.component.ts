import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Burger } from '../burger.model';
import { BurgersService } from '../burgers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/custom-validators';
import { AddonsService } from './addons.service';
import { Addon } from './addon.model';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  @ViewChild('addonCheckbox') addonCheckbox: ElementRef;
  burger: Burger;
  id: number;
  showAddons = false;
  burgerForm: FormGroup;
  totalPrice: number;
  addOns: Addon[] = [];

  constructor(
    private burgersService: BurgersService,
    private addonsService: AddonsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.burger = this.burgersService.getBurger(this.id);
          this.totalPrice = this.burger.price;
          this.addOns = this.addonsService.getAddons();
          this.initForm();
        }
      );
  }

  onAddonChanged() {
    this.showAddons = this.addonCheckbox.nativeElement.checked;
    this.totalPrice = this.burger.price;

    if (this.addonCheckbox.nativeElement.checked == false) {
      this.burgerForm.controls['addonsCheckboxes'].reset();
    }
  }

  onAddToCart() {
    let addons = [];

    for (let addon of this.addOns) {
      if (this.burgerForm.value.addonsCheckboxes[addon.name] === true) {
        addons.push(addon.name)
      }
    }

    let cartItem = {
      name: this.burger.name,
      addons: addons,
      quantity: this.burgerForm.value['quantity'],
      price: this.totalPrice * this.burgerForm.value['quantity'],
      specialInstructions: this.burgerForm.value['specialInstructions']
    }

    console.log(cartItem);
    this.router.navigate(['/menu']);
  }

  onQuantityInc() {
    this.burgerForm.controls['quantity'].patchValue(this.burgerForm.controls['quantity'].value + 1);
  }

  onQuantityDec() {
    this.burgerForm.controls['quantity'].patchValue(this.burgerForm.controls['quantity'].value - 1);
  }

  updateTotalPrice() {
    this.totalPrice = this.burger.price;
    let checkboxes = this.burgerForm.controls['addonsCheckboxes'].value;
    for (let addon of this.addOns) {
      if (checkboxes[addon.name] === true) {
        this.totalPrice += addon.price;
      }
    }
  }

  private initForm() {
    let controls = {};

    for (let addon of this.addOns) {
      controls[addon.name] = new FormControl();
    }

    this.burgerForm = new FormGroup({
      'addonsCheckboxes': new FormGroup(controls),
      'specialInstructions': new FormControl(),
      'quantity': new FormControl(1, [Validators.required, CustomValidators.mustBePositiveNum])
    });
  }
}
