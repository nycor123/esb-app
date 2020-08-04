import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth-service';
import { Router } from '@angular/router';

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
    @Output() close: EventEmitter<boolean> = new EventEmitter();
    addressForm: FormGroup;

    constructor(
        private http: HttpClient,
        private authService: AuthService,
        private router: Router
    ) {}

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
        this.initForm();
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

    onBack() {
        this.close.emit(false);
    }

    initForm() {
        let address = JSON.parse(localStorage.getItem('address'));

        if (address) {
            this.addressForm = new FormGroup({
                houseUnitFloorNo: new FormControl(address.houseUnitFloorNo, Validators.required),
                building: new FormControl(address.building),
                street: new FormControl(address.street, Validators.required),
                barangay: new FormControl(address.barangay, Validators.required),
                province: new FormControl(null, Validators.required),
                municipality: new FormControl(null, Validators.required)
            });
        } else {
            this.addressForm = new FormGroup({
                houseUnitFloorNo: new FormControl(null, Validators.required),
                building: new FormControl(),
                street: new FormControl(null, Validators.required),
                barangay: new FormControl(null, Validators.required),
                province: new FormControl(null, Validators.required),
                municipality: new FormControl(null, Validators.required)
            });
        }     
    }

    onSubmit() {
        console.log(this.addressForm.value);
        localStorage.setItem('address', JSON.stringify(this.addressForm.value));
        
        if (!this.authService.isLoggedIn) {
            return this.router.navigate(['auth']);
        } else if (this.authService.isLoggedIn && this.router.url === '/home') {
            this.router.navigate(['menu']);
        } else {
            this.close.emit(false);
        }
    }
}