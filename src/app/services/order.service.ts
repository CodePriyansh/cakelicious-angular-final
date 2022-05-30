import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url = "https://cake-licious-backend.herokuapp.com/";

   createOrder = this.url+"order/create-order";
   placeOrderApi = "http://localhost:3000/order/place-order";
   orderHistoryApi ="http://localhost:3000/order/view-order"
   codApi ="http://localhost:3000/order/cash-on-delivery"
   ;
  constructor(private http:HttpClient) { }
  public CreateOrder(amount:any):Observable<any>{
 return this.http.post(this.createOrder, { amount });
  }

  public placeOrder(userId:any,paymentResponse:any,address:any,alterMobile:any,orderedItems:any):Observable<any>{
  return this.http.post(this.placeOrderApi,{userId,paymentResponse,address,alterMobile,orderedItems});
  }

  public orderHistoryUser(userId:any):Observable<any>{
return this.http.post(this.orderHistoryApi,{userId})
  }

  public cashOnDelivery(userId:any,address:any,alterMobile:any,orderId:any,totalAmt:any,orderedItems:any):Observable<any>{
   return this.http.post(this.codApi,{userId,address,orderId,alterMobile,totalAmt,orderedItems})
  }
 
}
