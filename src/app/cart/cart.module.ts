import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CartRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot({ positionClass: 'inline' }),
        ToastContainerModule
    ]
})
export class CartModule {}