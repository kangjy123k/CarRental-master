import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

import { Car } from './car';
//import { CARS } from './mock-cars';

@Injectable()
export class CarService {

  cars: Car[];
  car: Car;
  
  constructor(private http: HttpClient) {}

  // getCarsWithPromise(): Promise<Car[]> {
  //   return Promise.resolve(CARS);
  // }
  
  public getCarsWithObservable(): Observable<Car[]> {
    return this.http.get("http://localhost:8080/cars").map((response: Response) => response || []) as Observable<Car[]>;
  }
  
  // getCar(plateNumber: number): Promise<Car> {
	// return Promise.resolve(CARS[plateNumber]);
  // }
  
  getCarWithObservable(plateNumber): Observable<Car> {
  	return this.http.get("http://localhost:8080/cars/"+plateNumber) as Observable<Car>;
  }
  
  rent(car): Observable<any> {
    car.rented = true;
    return this.http.put("http://localhost:8080/cars/"+car.plateNumber+"?louer=true", null);
  }

  getBack(car): Observable<any> {
    car.rented = false;
    return this.http.put("http://localhost:8080/cars/"+car.plateNumber+"?louer=false", null);
  }

}
