import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './Components/car/car.component';
import { BrandComponent } from './Components/brand/brand.component';
import { ColorComponent } from './Components/color/color.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { RentalComponent } from './Components/rental/rental.component';
import { NavigateComponent } from './Components/navigate/navigate.component';
import { CardetailComponent } from './Components/cardetail/cardetail.component';
import { RentaldetailComponent } from './Components/rentaldetail/rentaldetail.component';
import { DetailofdetailComponent } from './Components/detailofdetail/detailofdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    NavigateComponent,
    CardetailComponent,
    RentaldetailComponent,
    DetailofdetailComponent

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
