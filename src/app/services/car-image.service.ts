import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:7061/api/"
  constructor(private httpClient:HttpClient) { }

  getImagesByCar(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carsImage/getimagesbycarid?id" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath =  this.apiUrl + "carsImage/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
