import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponsModel } from '../models/Customer/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44389/api/customers/getall'
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<CustomerResponsModel> {
    return this.httpClient.get<CustomerResponsModel>(this.apiUrl);
  }
}

