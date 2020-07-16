import { Component, OnInit } from '@angular/core';
import { CombosService } from './combos.service';
import { Combo } from './combo.model';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.css']
})
export class CombosComponent implements OnInit {
  combos: Combo[];

  constructor(
    private combosService: CombosService
  ) { }

  ngOnInit(): void {
    this.combos = this.combosService.getCombos();
  }

}
