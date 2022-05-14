import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Occassion } from '../model/occassion';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  public getProductbyCategory(categoryId: any):Observable<Product[]>{
    let getProductByCategory =
      'http://localhost:3000/product/getProductBycategory';
    return this.http.get<Product[]>(getProductByCategory + '/' + categoryId);
  }
  public getOccassion():Observable<Occassion[]>{
    let getProductByOccassion =
      'http://localhost:3000/occassion/viewOccassion';
    return this.http.get<Occassion[]>(getProductByOccassion);
  }

  public getProductbypId(pId: any): Observable<Product[]>{
    let getProductById = 'http://localhost:3000/product/getProductById';
    return this.http.get<Product[]>(getProductById + '/' + pId);
  }
  public searchProduct(text: any): Observable<any>{
    let getProductById = 'http://localhost:3000/product/searchProduct';
    return this.http.get<any>(getProductById + '/' + text);
  }



}
