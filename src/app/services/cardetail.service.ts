import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardetailResponseModel } from '../models/cardetail/cardetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
   apiUrl='https://localhost:44389/api/cars/GetCarDetailDto'
  constructor(private httpClient: HttpClient) { }

  getCarDetails(): Observable<cardetailResponseModel>{
    return this.httpClient.get<cardetailResponseModel>(this.apiUrl)
  }
}
