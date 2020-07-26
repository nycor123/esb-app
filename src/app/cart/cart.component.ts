import { Component, OnInit, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { CartService } from './cart.service';
import { CartItem } from './cart-item.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  cartMargin: string;
  itemMarginLeft: string;
  cartItems: CartItem[];
  subtotal: number = 0;
  cartForm: FormGroup;
  cartSub: Subscription;
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  address: string;
  showDeliveryDetails: boolean = false;

  constructor(
    private cartService: CartService,
    private dataStorageService: DataStorageService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.updateMargins(window.screen.width);
    this.toastr.overlayContainer = this.toastContainer;
    this.setAddress();

    this.cartSub = this.cartService.cartSubject
    .subscribe(cartItems => {
      this.cartItems = cartItems;
      this.initForm();
    });

    this.dataStorageService.fetchUserCartItems()
    .subscribe(cartItems => this.cartService.loadCart());
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
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

  updateSubtotal() {
    this.subtotal = 0;

    for (let cartItem in this.cartItems) {
      if (this.cartForm.controls[cartItem].value.selected === true) {
        this.subtotal += this.cartItems[cartItem].price;
      }
    }
  }

  initForm() {
    let formGroups = {};

    for (let cartItem in this.cartItems) {
      formGroups[cartItem] = new FormGroup({
        'selected': new FormControl(),
        'quantity': new FormControl()
      });
    }

    this.cartForm = new FormGroup(formGroups);
    
    for (let cartItem in this.cartItems) {
      let quantity = this.cartItems[cartItem].quantity;
      this.cartForm.controls[cartItem].patchValue({'quantity': quantity});
    }
  }

  onQuantityChange(id: number, mode: string) {
    let checkboxes = {};
    // store checkbox value for each control
    for (let cartItem in this.cartItems) {
      checkboxes[cartItem] = this.cartForm.controls[cartItem].value.selected
    }
    // increase or decrease item quantity
    if (mode === 'increase') {
      this.cartService.increaseCartItemQty(id);
    } else {
      this.cartService.decreaseCartItemQty(id);
    }
    // restore checbox value for each control
    for (let cartItem in this.cartItems) {
      if (checkboxes[cartItem] === true) {
        this.cartForm.controls[cartItem].patchValue({selected: true});
      }
    }
    
    this.updateSubtotal();
  }

  onDeleteItem(cartItem: CartItem) {
    this.dataStorageService.deleteUserCartItem(cartItem)
    .subscribe(res => {
      this.dataStorageService.fetchUserCartItems()
      .subscribe(cartItems => {
        this.subtotal = 0;
        this.cartService.loadCart();
        this.toastr.info("Item deleted.");
      });
    })
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

  onClose(event) {
    this.showDeliveryDetails = false;
    this.setAddress(); // TODO: make this call only when the stored address is actually changed
  }

  onShowAddressForm() {
    this.showDeliveryDetails = true;
  }
}
