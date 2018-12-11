import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html'
})

export class CarsComponent implements OnInit {

  title = 'Car Rental';
  cars: Car[];
  selectedCar: Car;

  constructor(
    private carService: CarService,
    private router: Router,
    private http: HttpClient) { }

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

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCar.plateNumber]);
  }

}
