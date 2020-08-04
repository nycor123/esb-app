import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Burger } from '../burger.model';
import { BurgersService } from '../burgers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/custom-validators';
import { AddonsService } from './addons.service';
import { Addon } from './addon.model';
import { CartService } from 'src/app/cart/cart.service';
import { CartItem } from 'src/app/cart/cart-item.model';
import { AuthService } from 'src/app/auth/auth-service';
import { HttpClient } from '@angular/common/http';

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
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
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
    if (this.authService.isLoggedIn == false) {
      return this.router.navigate(['auth']);
    }

    let addons = [];
    let extraInfo = '';

    for (let addon of this.addOns) {
      if (this.burgerForm.value.addonsCheckboxes[addon.name] === true) {
        addons.push(addon.name)
      }
    }

    if (addons.length > 0) {
      extraInfo = "Addons: " + addons.toString();
    }
    // ADDING OF ITEM TO CART
    let cartItem: CartItem = {
      name: this.burger.name,
      extraInfo: extraInfo,
      imgUrl: this.burger.imgUrl,
      price: this.totalPrice * this.burgerForm.value['quantity'],
      quantity: this.burgerForm.value['quantity'],
      specialInstructions: this.burgerForm.value['specialInstructions']
    };

    this.cartService.addItemToCart(cartItem);
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
