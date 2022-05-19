import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "https://cake-licious-backend.herokuapp.com/";

   createOrder = this.url+"order/create-order";
   placeOrderApi = this.url+"order/place-order";
  constructor(private http:HttpClient) { }

  public CreateOrder(amount:any):Observable<any>{
 return this.http.post(this.createOrder, { amount });
  }

  public placeOrder(userId:any,paymentResponse:any,address:any,alterMobile:any,orderedItems:any):Observable<any>{
  return this.http.post(this.placeOrderApi,{userId,paymentResponse,address,alterMobile,orderedItems});
  }
 
}
