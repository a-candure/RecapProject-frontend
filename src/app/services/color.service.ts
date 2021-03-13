import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponsModel } from '../models/Color/colorResponsModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44389/api/colors/getall'
  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ColorResponsModel> {
    return this.httpClient.get<ColorResponsModel>(this.apiUrl);
  }
}
