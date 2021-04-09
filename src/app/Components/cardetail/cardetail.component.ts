import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CarImage } from 'src/app/models/carImage';
import { CarImagesService } from 'src/app/services/car-images.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  cardetails: Cardetail[] = [];
  dataLoaded = false;
  carImages: CarImage[] = [];
  currentCar: Cardetail;
  cardetail: Cardetail;

  imgUrl: string = 'https://localhost:44389';
  defaultImg: string = '/images/Araba1.jpg';
  filterText = '';

  constructor(
    private cardetailService: CardetailService,
    private carImagesService: CarImagesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getImageByCarId(params['carId']);
      }
    });
    this.getCardetails();
  }
  getCardetails() {
    this.cardetailService.getCarDetails().subscribe((response) => {
      this.cardetails = response.data;
      this.dataLoaded = true;
    });
  }

  getImageByCarId(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
      this.dataLoaded = true;
    });
  }
}
