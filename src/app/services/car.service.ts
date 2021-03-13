import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/Car/carResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  apiUrl = 'https://localhost:44389/api/cars/getAll';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }
}
