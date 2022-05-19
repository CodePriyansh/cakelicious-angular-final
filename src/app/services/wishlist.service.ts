import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishlistApi = 'http://localhost:3000/wishlist/add-to-wishlist';
  getWishlist = 'http://localhost:3000/wishlist/view-wishlist';
  deleteFullwishlist = 'http://localhost:3000/wishlist/delete-wishlist';
  deleteOneitem = 'http://localhost:3000/wishlist/delete-wishlist-item';
  constructor(private http:HttpClient) { }

  // CART-APIS

  public addtoWishlist(pId: any, cusId: any): Observable<any> {
    return this.http.post(this.wishlistApi, { pId, cusId });
  }
  public getWishlistItems(cusId: any): Observable<any> {
    return this.http.post(this.getWishlist, { cusId });
  }

  public deleteWishlist(cusId:any):Observable<any>{
    return this.http.post(this.deleteFullwishlist,{cusId})
  }

  public deleteOne(cusId:any,pId:any):Observable<any>{
    return this.http.post(this.deleteOneitem,{cusId,pId})
  }
}
