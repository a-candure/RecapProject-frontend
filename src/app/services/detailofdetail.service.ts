import { Injectable } from '@angular/core';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class DetailofdetailService {
  apiUrl='https://localhost:44389/api/'

  constructor(private httpClient: HttpClient) { }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<Cardetail>>{
    let newPath =this.apiUrl+ "cars/GetCarDetailDto"
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath)
  }

  getImage(imagePath:string){
    let path = this.apiUrl + "carImages/";
    return path;
  }

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'carimages/GetByCarId?carId=2' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
