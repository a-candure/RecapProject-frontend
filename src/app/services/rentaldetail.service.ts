import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentaldetailsResponseModel } from '../models/rentaldetail/rentaldetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentaldetailService {
  apiUrl='https://localhost:44389/api/rentals/GetRentalDetailDto'
  constructor(private httpClient: HttpClient) { }

  getRentalDetails(): Observable<rentaldetailsResponseModel>{
    return this.httpClient.get<rentaldetailsResponseModel>(this.apiUrl)
  }
}
