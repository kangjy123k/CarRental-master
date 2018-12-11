import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail.component';
import { GetbackcarsComponent } from './getbackcars.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'detail/:plateNumber', component: CarDetailComponent },
  { path: 'cars',     component: CarsComponent },
  { path: 'getbackcars', component: GetbackcarsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
