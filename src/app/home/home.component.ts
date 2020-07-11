import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showDeliveryDetails = false;
  jumbotronWidth = '';

  constructor() { }

  ngOnInit(): void {
    
    if (window.screen.width >= 768 && window.screen.width <= 1024) {
      this.jumbotronWidth = 'w-75';
    } 
    else if (window.screen.width > 1024) {
      this.jumbotronWidth = 'w-50';
    } 
  }

}
