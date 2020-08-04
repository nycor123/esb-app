import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [
        CheckoutComponent,
        OrderConfirmComponent
    ],
    imports: [
        CheckoutRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class CheckoutModule {}