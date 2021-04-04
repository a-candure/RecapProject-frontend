import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/CarImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})

export class CarImagesService {
  apiUrl = 'https://localhost:44389/api/';
  constructor(private httpClient: HttpClient) {}

  getAllImages(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/Getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carImages/GetByCarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
