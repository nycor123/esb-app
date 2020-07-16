import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { CommonModule } from '@angular/common';
import { BurgersComponent } from './burgers/burgers.component';
import { CombosComponent } from './combos/combos.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ExtrasComponent } from './extras/extras.component';
import { RouterModule } from '@angular/router';
import { BurgerComponent } from './burgers/burger/burger.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComboComponent } from './combos/combo/combo.component';

@NgModule({
    declarations: [
        MenuComponent,
        BurgersComponent,
        CombosComponent,
        DrinksComponent,
        ExtrasComponent,
        BurgerComponent,
        ComboComponent
    ],
    imports: [
        MenuRoutingModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class MenuModule {}