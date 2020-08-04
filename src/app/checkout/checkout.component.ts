import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartToCheckoutService } from '../shared/cart-to-checkout.service';
import { CartItem } from '../cart/cart-item.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  address: string;
  itemsToCheckout: CartItem[];
  subtotal = 0;
  showDeliveryDetails = false;
  contactForm: FormGroup;
  orderPlaced = false;
  orderId: string = '';

  constructor(
    private cartToCheckoutService: CartToCheckoutService,
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit(): void {
    this.itemsToCheckout = this.cartToCheckoutService.items;
    this.setAddress();
    this.setSubtotal();
    this.initForm();

    console.log(this.itemsToCheckout);
  }

  ngOnDestroy() {

  }

  setAddress() {
    let address = JSON.parse(localStorage.getItem('address'));

    if (address) {
      address.street += " Street";

      if (address.building) {
        this.address =
          address.houseUnitFloorNo
          + " "
          + address.building
          + " "
          + address.street
          + " "
          + address.barangay
          + " " + address.municipality
          + ", "
          + address.province;
      } else {
        this.address =
          address.houseUnitFloorNo
          + " "
          + address.street
          + " "
          + address.barangay
          + " " + address.municipality
          + ", "
          + address.province;
      }
    } else {
      this.address = "Address not provided.";
    }
  }

  setSubtotal() {
    for (let item of this.itemsToCheckout) {
      this.subtotal += item.price;
    }
  }

  onClose(event) {
    this.showDeliveryDetails = false;
    this.setAddress(); // TODO: make this call only when the stored address is actually changed
  }

  onShowAddressForm() {
    this.showDeliveryDetails = true;
  }

  initForm() {
    this.contactForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    const user = JSON.parse(localStorage.getItem('user'));
    let uid = user['uid'];
    let order = {};
    order = { 
      ...this.contactForm.value,
      address: this.address, 
      items: this.itemsToCheckout,
      userId: uid
    };

    for (let cartItem of this.itemsToCheckout) {
      this.dataStorageService.deleteUserCartItem(cartItem)
      .subscribe(res => {
        console.log(res);
      });
    }

    this.dataStorageService.addOrder(order)
    .subscribe(res => {
      console.log(res);
      this.orderId = res['name'];
      this.orderPlaced = true;
    });
  }

}
