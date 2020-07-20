import { Component, OnInit, OnDestroy} from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  showDeliveryDetails = false;
  jumbotronWidth = '';
  user: User;
  userSub: Subscription;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    
    if (window.screen.width >= 768 && window.screen.width <= 1024) {
      this.jumbotronWidth = 'w-75';
    } 
    else if (window.screen.width > 1024) {
      this.jumbotronWidth = 'w-50';
    }

    this.userSub = this.authService.user.subscribe(user => {
      if (user) {
        this.user = user;
        this.toastr.success("Welcome " + user.name + "!");
        console.log("Login successful.");
      } else {
        this.toastr.info("Logout successful.");
        console.log("Logout successful.");
      }
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
