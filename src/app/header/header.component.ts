import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  mx = 'mx-5';

  constructor() { }

  ngOnInit(): void {
    
    if (window.screen.width < 411) {
      this.mx = '';
    }
  }

  toggleIsMenuCollapsed() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

}
