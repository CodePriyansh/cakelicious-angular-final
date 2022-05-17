import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Occassion } from '../model/occassion';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class OccassionService {

  constructor( private http:HttpClient) { }

  public getOccassion():Observable<Occassion[]>{
    let getOccassion = 'http://localhost:3000/occassion/viewOccassion';
    return this.http.get<Occassion[]>(getOccassion);
  }

  public getSingleOccassion(occassionId:any):Observable<Occassion>{
    let getSingleOccassion="http://localhost:3000/occassion/viewOneOccassion"
    return this.http.get<Occassion>(getSingleOccassion+'/'+ occassionId);
  }

  public getProductByOccassion(oid:any):Observable<Product[]>{
    let productsByOccasssion = "http://localhost:3000/occassion/occassion-product"
      return this.http.get<Product[]>(productsByOccasssion+'/'+oid)
  }
}
