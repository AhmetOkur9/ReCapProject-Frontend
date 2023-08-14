import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentAddComponent } from './components/payment-add/payment-add.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarComponent },
  { path: 'cars', component: CarComponent },
  { path: 'cars/brand/:brandId/color/:colorId', component: CarComponent },
  { path: 'cars/brand/:brandId', component: CarComponent },
  { path: 'cars/color/:colorId', component: CarComponent },
  { path: 'cars/getcardetailbyid/:carId' , component:CarDetailComponent},
  { path: 'cars/getcardetailbyid/:carId/rental/getrentalbyid/:carId' , component:RentalAddComponent},//payment
  { path: 'cars/getcardetailbyid/:carId/rental/getrentalbyid/:carId/payment' , component:PaymentComponent},
  { path: 'cars/getcardetailbyid/:carId/rental/getrentalbyid/:carId/payment/add' , component:PaymentAddComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
