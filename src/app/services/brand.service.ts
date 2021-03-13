import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/Brand/brandResponseModel';


@Injectable({ 
  providedIn: 'root',
})
export class BrandService {
  apiUrl = 'https://localhost:44389/api/brands/getAll';

  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<BrandResponseModel> {
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);
  }
}