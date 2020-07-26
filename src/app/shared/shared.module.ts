import { NgModule } from '@angular/core';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DeliveryDetailsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        DeliveryDetailsComponent
    ]
})
export class SharedModule {}