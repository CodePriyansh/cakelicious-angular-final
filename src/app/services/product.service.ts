import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProductBycategory = "http://localhost:3000/product/getProductBycategory"
  getProductBycategorycat = "http://localhost:3000/product/getProductBycategory"

  constructor(private http:HttpClient) { }

  public getProductBycategory(categoryId:string):Observable<product[]>{
    return this.http.post<product[]>(this.getProductBycategorycat+"/"+categoryId)
  }

  public getProductBycategory(pId:string):Observable<product[]>{
    return this.http.post<product[]>(this.getProductBycategory+"/"+pId)
  }

}
