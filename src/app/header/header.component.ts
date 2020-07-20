import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { Router } from '@angular/router';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  mx = 'mx-5';
  user: User;
  private userSub: Subscription;

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (window.screen.width < 411) {
      this.mx = '';
    }

    this.userSub = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  toggleIsMenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  onLogoutOrLogin() {
    if (this.authService.isLoggedIn) {
      this.authService.SignOut();
      this.router.navigate(['home']);
    } else {
      this.router.navigate(['auth']);
    }

    this.toggleIsMenuCollapsed();
  }

}
