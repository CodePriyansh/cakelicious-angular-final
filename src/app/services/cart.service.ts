import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartApi = 'http://localhost:3000/cart/add-to-cart';
  getCart = 'http://localhost:3000/cart/view-cart';
  deleteFullCart = 'http://localhost:3000/cart/delete-cart';
  deleteOneitem = 'http://localhost:3000/cart/delete-cart-item';
  constructor(private http:HttpClient) { }

  // CART-APIS

  public addtoCart(id: any, Userid: any): Observable<any> {
    return this.http.post(this.cartApi, { id, Userid });
  }
  public getCartItems(Userid: any): Observable<any> {
    return this.http.post(this.getCart, { Userid });
  }

  public deleteCart(Userid:any):Observable<any>{
    return this.http.post(this.deleteFullCart,{Userid})
  }

  public deleteOne(Userid:any,pId:any):Observable<any>{
    return this.http.post(this.deleteOneitem,{Userid,pId})
  }


}
