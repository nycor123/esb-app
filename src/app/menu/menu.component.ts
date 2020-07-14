import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navJustifyCenter = false;

  constructor() { }

  ngOnInit(): void {
    this.checkNavJustifyCenter();
  }

  @HostListener('window:resize', ['$event'])
  onResize($event) {
      this.checkNavJustifyCenter();
  }

  checkNavJustifyCenter() {
    if (window.screen.width >= 768) {
      this.navJustifyCenter = true;
    } else {
      this.navJustifyCenter = false;
    }
  }
}
