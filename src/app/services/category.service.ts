import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) {}
   public getCategory():Observable<Category[]>{
    let getCategory =
      'http://localhost:3000/category/viewCategory';
    return this.http.get<Category[]>(getCategory);
  }
}
