import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { MenuRoutingModule } from './menu-routing.module';
import { CommonModule } from '@angular/common';
import { BurgersComponent } from './burgers/burgers.component';
import { CombosComponent } from './combos/combos.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ExtrasComponent } from './extras/extras.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        MenuComponent,
        BurgersComponent,
        CombosComponent,
        DrinksComponent,
        ExtrasComponent
    ],
    imports: [
        MenuRoutingModule,
        CommonModule,
        RouterModule
    ]
})
export class MenuModule {}