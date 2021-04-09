import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '../models/brand';
import { Car } from '../models/car';
import { Cardetail } from '../models/cardetail';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  defaultColor: Color = {
    colorId: 0,
    colorName: '',
  };
  defaultBrand: Brand = {
    brandId: 0,
    brandName: '',
  };


  currentBrand!: Brand;
  currentColor!: Color;
  currentStatus!: any;
  currentCar!: Car;

  constructor(private router: Router) {}

  // Brand
  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;

    this.carRoute();
  }
  setCurrentBrandDefault() {
    this.currentBrand = this.defaultBrand;

    this.carRoute();
  }

  // Color
  setCurrentColor(color: Color) {
    this.currentColor = color;

    this.carRoute();
  }
  setCurrentColorDefault() {
    this.currentColor = this.defaultColor;

    this.carRoute();
  }

  // Car

  setCurrentCar(car: Car) {
    this.currentCar = car;

    this.carDetailRoute();
  }

  // setCurrentCarDefault() {
  //   this.currentCar = this.defaultCar;

  //   this.carDetailRoute();
  // }

  carRoute() {
    if (this.currentBrand?.brandId > 0 && this.currentColor?.colorId > 0) {
      this.router.navigate([
        `/brand/${this.currentBrand.brandName}-${this.currentBrand.brandId}/color/${this.currentColor.colorName}-${this.currentColor.colorId}`,
      ]);
    } else if (this.currentBrand?.brandId > 0) {
      this.router.navigate([
        `/brand/${this.currentBrand.brandName}-${this.currentBrand.brandId}`,
      ]);
    } else if (this.currentColor?.colorId > 0) {
      this.router.navigate([
        `/color/${this.currentColor.colorName}-${this.currentColor.colorId}`,
      ]);
    } else {
      this.router.navigate([``]);
    }
  }

  carDetailRoute() {
    if (this.currentCar?.id > 0) {
      this.router.navigate([
        `/cars/${this.currentCar?.id}-${this.currentCar?.description.replace(
          /\s/g,
          '-'
        )}`,
      ]);
    } else {
      this.router.navigate([``]);
    }
  }
}
