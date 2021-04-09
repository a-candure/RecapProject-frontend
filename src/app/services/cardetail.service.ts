import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cardetail } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44389/api/'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<ListResponseModel<Cardetail>>{
    let newPath =this.apiUrl+ "cars/GetCarDetailDto"
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath)
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<Cardetail>>{
    let newPath =this.apiUrl+ "cars/GetCarDetailDtoById?carId=" + carId
    return this.httpClient.get<ListResponseModel<Cardetail>>(newPath)
  }
  
  
}

// burasını fotolu yer ile refactor et
