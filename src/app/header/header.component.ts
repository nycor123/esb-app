import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleNavbar = true;
  mx = 'mx-5';

  constructor() { }

  ngOnInit(): void {
    
    if (window.screen.width < 411) {
      this.mx = '';
    }
  }

}
