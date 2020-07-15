import { Component, OnInit } from '@angular/core';
import { Burger } from './burger.model';
import { BurgersService } from './burgers.service';

@Component({
    selector: 'app-burgers',
    templateUrl: './burgers.component.html',
    styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {

  burgers: Burger[];

  constructor(private burgersService: BurgersService) {}

  ngOnInit() {
    this.burgers = this.burgersService.getBurgers();
  }
}