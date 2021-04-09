import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44389/api/';
  constructor(private httpClient: HttpClient) {}

  getCarWithFilter(
    brandId?: number,
    colorId?: number,
    status?: number,
    id?: number
  ): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'cars?';

    if (brandId !== undefined) {
      newPath += 'brandId=' + brandId + '&';
    }
    if (colorId !== undefined) {
      newPath += 'colorId=' + colorId + '&';
    }
    if (status !== undefined) {
      newPath += 'status=' + status + '&';
    }
    if (id !== undefined) {
      newPath += 'id=' + id + '&';
    }

    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  add(car: FormData) {
    let url = this.apiUrl + 'cars';
    return this.httpClient.post(url, car);
  }

  update(car: Car) {
    let url = this.apiUrl + 'cars/update';
    return this.httpClient.post(url, car);
  }

  delete(car: Car) {
    let url = this.apiUrl + 'cars/delete';
    return this.httpClient.post(url, car);
  }
}
