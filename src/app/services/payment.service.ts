import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Payment } from '../models/payment';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  baseUrl = "https://localhost:7061/api/payment"

  constructor(private httpClient:HttpClient) { }

  getPayments():Observable<ListResponseModel<Payment>>{
    let newPath = this.baseUrl + "/getall"
    return this.httpClient.get<ListResponseModel<Payment>>(newPath)
  }

  getPaymentsById(id:number):Observable<ListResponseModel<Payment>>{
    let newPath = this.baseUrl + "/getbyid?id=" + id
    return this.httpClient.get<ListResponseModel<Payment>>(newPath)
  }

  add(payment:Payment):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.baseUrl + "/add" , payment)
  }
}
