import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    selector: 'my-cars',
    templateUrl: './getbackcars.component.html'
  })

  export class GetbackcarsComponent implements OnInit {

    title = 'Car Rental';
    
    cars: Car[];
    selectedCar: Car;
  
    constructor(
      private carService: CarService,
      private router: Router,
      private location: Location) { }
  
    getCars(): void {
      //this.carService.getCarsWithPromise().then(cars => this.cars = cars);
      this.carService.getCarsWithObservable().subscribe(
         res => {
             this.cars = res;
         }
      );
    }
  
    ngOnInit(): void {
      this.getCars();
    }
    back(): void{
      this.carService.getBack(this.selectedCar).subscribe(selectedCar => this.selectedCar = selectedCar);
      this.location.back();
    }
    return(): void {
        this.router.navigate(['/']);
      }
}