import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-additional',
    template: `
        (add &#8369;{{ additionalAmount }})
    `
})
export class AdditionalComponent implements OnInit {
    @Input() drinkPrice: number;
    additionalAmount: number;

    ngOnInit() {
        this.additionalAmount = this.drinkPrice - 20;
    }
}