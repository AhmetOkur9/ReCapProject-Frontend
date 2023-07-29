import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:7061/api/"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>> {
    let newPath =this.apiUrl +"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
    };
    

  
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbybrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +"cars/getbycolorId?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarsByBrandAndColor(colorId:number,brandId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getbybrandidandcolorid?brandId=" + brandId +"&colorId=" +colorId
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  

}

