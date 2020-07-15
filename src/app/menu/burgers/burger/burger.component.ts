import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Burger } from '../burger.model';
import { BurgersService } from '../burgers.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/custom-validators';

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
  

  constructor(
    private burgersService: BurgersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.burger = this.burgersService.getBurger(this.id);
          this.initForm();
        }
      );
  }

  onAddonClicked() {
    this.showAddons = this.addonCheckbox.nativeElement.checked;
  }

  onAddToCart() {
    console.log(this.burgerForm);
  }

  private initForm() {
    this.burgerForm = new FormGroup({
      'beefPatty': new FormControl(),
      'bacon': new FormControl(),
      'slicedCheese': new FormControl(),
      'slicedHam': new FormControl(),
      'egg': new FormControl(),
      'mushroom': new FormControl(),
      'specialInstructions': new FormControl(),
      'quantity': new FormControl(1, [Validators.required, CustomValidators.mustBePositiveNum])
    });
  }
}
