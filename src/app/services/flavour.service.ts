import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flavour } from '../model/flavour';

@Injectable({
  providedIn: 'root'
})
export class FlavourService {
  private fetchFlaovryApi = "http://localhost:3000/admin-flavour/findall";
  constructor(private http:HttpClient) { 
  }
  public getFlaovurList() : Observable<Flavour[]>{
     return this.http.get<Flavour[]>(this.fetchFlaovryApi);
  }
}
