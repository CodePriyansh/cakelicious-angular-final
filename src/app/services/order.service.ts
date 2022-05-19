import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   createOrder = "http://localhost:3000/order/create-order";
   placeOrderApi = "http://localhost:3000/order/place-order";
  constructor(private http:HttpClient) { }

  public CreateOrder(amount:any):Observable<any>{
 return this.http.post(this.createOrder, { amount });
  }

  public placeOrder(userId:any,paymentResponse:any,address:any,alterMobile:any,orderedItems:any):Observable<any>{
  return this.http.post(this.placeOrderApi,{userId,paymentResponse,address,alterMobile,orderedItems});
  }
 
}
