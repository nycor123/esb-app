import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        AuthRoutingModule
    ]
})
export class AuthModule {}