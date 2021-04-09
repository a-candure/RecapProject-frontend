import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-detailofdetail',
  templateUrl: './detailofdetail.component.html',
  styleUrls: ['./detailofdetail.component.css'],
})
export class DetailofdetailComponent implements OnInit {
  cardetails: Cardetail;
  dataLoaded = false;
  carImages: string[];
  cardetail: Cardetail;

  imgUrl: string = 'https://localhost:44389';
  defaultImg: string = '/images/Araba1.jpg';
  filterText = '';

  constructor(
    private cardetailService: CardetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCardetailsByCarId(params['carId']);
      }
    });
  }
  getCardetailsByCarId(carId: number) {
    this.cardetailService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cardetails = response.data[0];
      this.carImages = response.data[0].images;
      this.dataLoaded = true;
    });
  }

  imgClassGenerator(imgPath: string) {
    if (this.carImages[0] === imgPath) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
  }
}
