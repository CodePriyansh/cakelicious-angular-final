import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartApi = 'http://localhost:3000/cart/add-to-cart';
  getCart = 'http://localhost:3000/cart/view-cart';
  constructor(private http:HttpClient) { }

  // CART-APIS

  public addtoCart(id: any, Userid: any): Observable<any> {
    return this.http.post(this.cartApi, { id, Userid });
  }
  public getCartItems(userId: any): Observable<any> {
    return this.http.post(this.getCart, { userId });
  }


}
