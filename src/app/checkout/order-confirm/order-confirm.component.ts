import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {
  @Input() orderId: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
