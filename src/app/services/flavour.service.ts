import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flavour } from '../model/flavour';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {
  private fetchFlaovryApi = "http://localhost:3000/admin-flavour/findall";
  private productByFlavour = "http://localhost:3000/admin-product/getProductbyFlavour"
  constructor(private http:HttpClient) { 
  }
  public getFlaovurList() : Observable<Flavour[]>{
     return this.http.get<Flavour[]>(this.fetchFlaovryApi);
  }

  public getProductByFlavour(fid:any):Observable<Product[]>{
  
    return this.http.get<Product[]>(this.productByFlavour+"/"+fid)
  }
  
}



