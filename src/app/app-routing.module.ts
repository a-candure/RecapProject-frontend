import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './Components/car/car.component';
import { CardetailComponent } from './Components/cardetail/cardetail.component';
import { DetailofdetailComponent } from './Components/detailofdetail/detailofdetail.component';


const routes: Routes = [
  {path:"",pathMatch:"full", component:CardetailComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorId", component:CarComponent},
  {path:"cars/detail/:carId", component : DetailofdetailComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
