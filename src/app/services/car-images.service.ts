import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})

export class CarImagesService {
  apiUrl = 'https://localhost:44389/api/';
  constructor(private httpClient: HttpClient) {}

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getByCarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getAllCarImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  // getImage(imagePath:string){
  //   let path = this.apiUrl + "carImages/";
  //   return path;
  // }
  
}
