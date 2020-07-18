import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static mustBePositiveNum(control: AbstractControl): {[key: string]: boolean} | null {
        if (control.value <= 0) {
            return { mustBePositiveNum: true }
        } else {
            return null;
        }
    }
}