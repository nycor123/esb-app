import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-delivery-details',
    templateUrl: './delivery-details.component.html',
    styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {
    provincesJson: any[] = [];
    provinces: string[] = [];
    municipalities: string[] = [];
    compWidthClass: string;

    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get("https://raw.githubusercontent.com/flores-jacob/philippine-regions-provinces-cities-municipalities-barangays/master/philippine_provinces_cities_municipalities_and_barangays_2019v2.json")
            .subscribe(data => {
                let region4A = (data['4A']['province_list']);
                let ncr = (data['NCR']['province_list']);
                this.provincesJson = {...region4A, ...ncr};

                for (let province in this.provincesJson) {
                    this.provinces.push(province);
                }
            });
        
        this.resizeComp(window.screen.width);
    }

    onProvinceChanged($event) {
        this.municipalities.splice(0, this.municipalities.length);
        let municipalities = this.provincesJson[$event.target.value]['municipality_list'];

        for (let municipality in municipalities) {
            this.municipalities.push(municipality);
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize($event) {
        let width = $event.target.innerWidth;
        this.resizeComp(width);
    }

    resizeComp(width: number) {
        
        if (width <= 576) {
            this.compWidthClass = 'w-100';
        }
        else if (width <= 768) {
            this.compWidthClass = 'w-75';
        }
        else if (width <= 992) {
            this.compWidthClass = 'w-50';
        }
        else {
            this.compWidthClass = 'w-50';
        }
    }
}