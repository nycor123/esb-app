import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';
import { BurgersComponent } from './burgers/burgers.component';
import { CombosComponent } from './combos/combos.component';
import { DrinksComponent } from './drinks/drinks.component';
import { ExtrasComponent } from './extras/extras.component';
import { BurgerComponent } from './burgers/burger/burger.component';
import { ComboComponent } from './combos/combo/combo.component';

const routes: Routes = [
    { path: 'menu', component: MenuComponent, children: [
        { path: 'burgers', component: BurgersComponent},
        { path: 'burgers/:id', component: BurgerComponent },
        { path: 'combos', component: CombosComponent },
        { path: 'combos/:id', component: ComboComponent },
        { path: 'drinks', component: DrinksComponent },
        { path: 'extras', component: ExtrasComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {}