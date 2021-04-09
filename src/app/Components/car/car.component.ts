import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';

import { CarService } from 'src/app/services/car.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  imgUrl: string = 'https://localhost:44389';
  defaultImg: string = '/images/Araba1.jpg';
  filterText = '';
  dataLoaded=false

  constructor(
    private carService: CarService,
    private routingService: RoutingService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      let brandName = params['brandName']?.split('-')[
        this.activeRoute.snapshot.params['brandName']?.split.length - 1
      ];

      let colorName = params['colorName']?.split('-')[
        this.activeRoute.snapshot.params['colorName']?.split.length - 1
      ];

      if (colorName && brandName) {
        this.getCarWithFilter(brandName, colorName);
      } else if (colorName) {
        this.getCarWithFilter(undefined, colorName);
      } else if (brandName) {
        this.getCarWithFilter(brandName, undefined);
      } else {
        this.getCarWithFilter(
          this.routingService.currentBrand?.brandId > 0
            ? this.routingService.currentBrand?.brandId
            : undefined,
          this.routingService.currentColor?.colorId > 0
            ? this.routingService.currentColor?.colorId
            : undefined,
          // this.routingService.currentStatus?.id > 0
          //   ? this.routingService.currentStatus?.id
          //   : undefined
        );
      }
    });
  }

  getCarWithFilter(brandId?: number, colorId?: number, status?: number) {
    this.carService
      .getCarWithFilter(brandId, colorId, status)
      .subscribe((response) => {
        this.cars = response.data;
        this.dataLoaded=true
      });
  }

  setCurrentCar(car: Car) {
    this.routingService.setCurrentCar(car);
  }
}