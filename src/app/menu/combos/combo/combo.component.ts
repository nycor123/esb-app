import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Combo } from '../combo.model';
import { CombosService } from '../combos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../../../shared/custom-validators';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {
  combo: Combo;
  id: number;
  comboForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private combosService: CombosService
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.combo = this.combosService.getCombo(this.id);
          this.initForm();
        }
      );
  }

  initForm() {
    this.comboForm = new FormGroup({
        'specialInstructions': new FormControl(),
        'quantity': new FormControl(1, [Validators.required, CustomValidators.mustBePositiveNum])
    });
  }

  onIncreaseQuantity() {
    this.comboForm.controls['quantity'].patchValue(this.comboForm.controls['quantity'].value + 1);
  }

  onDecreaseQuantity() {
    this.comboForm.controls['quantity'].patchValue(this.comboForm.controls['quantity'].value - 1);
  }

}
