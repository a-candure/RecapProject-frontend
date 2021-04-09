import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rentaldetail } from '../models/rentaldetail';

@Injectable({
  providedIn: 'root',
})
export class RentaldetailService {
  apiUrl = 'https://localhost:44389/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentalDetails(): Observable<ListResponseModel<Rentaldetail>> {
    let newPath = this.apiUrl + 'rentals/GetRentalDetailDto';
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl);
  }
  getRentals(): Observable<ListResponseModel<Rentaldetail>> {
    let newPath = this.apiUrl + 'rentals/getAll';
    return this.httpClient.get<ListResponseModel<Rentaldetail>>(this.apiUrl);
  }
}
