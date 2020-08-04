import { CartComponent } from './cart.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../auth/auth.guard';
import { CartResolverService } from './cart-resolver.service';

const routes: Routes = [
    { 
        path: 'cart', component: CartComponent, 
        canActivate: [AuthGuard], 
        resolve: [CartResolverService]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CartRoutingModule {}