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

  public placeOrder(response:any,userId:any,cartItems:any,address:any):Observable<any>{
  return this.http.post(this.placeOrderApi,{response,userId,cartItems,address});
  }

}
