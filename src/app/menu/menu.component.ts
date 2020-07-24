import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item.model';
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  navJustifyCenter = false;
  cartSub: Subscription;
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.checkNavJustifyCenter();
    this.toastr.overlayContainer = this.toastContainer;

    this.cartSub = this.cartService.cartSubject
    .subscribe((cart: CartItem[]) => {
      this.toastr.success("Item added to cart!");
    });
  }

  ngOnDestroy() {
    this.cartSub.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize($event) {
      this.checkNavJustifyCenter();
  }

  checkNavJustifyCenter() {
    if (window.screen.width >= 768) {
      this.navJustifyCenter = true;
    } else {
      this.navJustifyCenter = false;
    }
  }
}
