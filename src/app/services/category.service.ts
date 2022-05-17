import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}
   public getCategory():Observable<Category[]>{
    let getCategory =
      'http://localhost:3000/category/viewCategoryByuser';
    return this.http.get<Category[]>(getCategory);
  }

  public getProductByCategory(cid:any):Observable<Product[]>{
    let productByCatgory="http://localhost:3000/admin-product/category-product"
    return this.http.get<Product[]>(productByCatgory+'/'+cid)
  }
}
