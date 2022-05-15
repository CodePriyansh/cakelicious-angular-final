import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { Flavour } from 'src/app/model/flavour';
import { Occassion } from 'src/app/model/occassion';
import { FlavourService } from 'src/app/services/flavour.service';
import { LoginService } from 'src/app/services/login.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  occassionList:Occassion[]|any;
  categoryList : Category[]|any;
  flavourList?:Flavour[]; // or |any 
  constructor(private router:Router , private service:LoginService , private productService:ProductService, private flavourService:FlavourService) { 
    this.productService.getOccassion().subscribe((data: any)=>{
      console.log(data);
      this.occassionList=data;
    })

    // this.productService.getCategory().subscribe((data: any)=>{
    //   console.log(data);
    //   this.occassionList=data;
    // })

  }
  ngOnInit(){
     this.flavourService.getFlaovurList().subscribe(data=>{
       this.flavourList = data;
     },err=>{
       if(err instanceof HttpErrorResponse){
          if(err.status == 500)
            alert('Something went wrong...')
;       }
     })
  } 
  signout(){
  sessionStorage.removeItem('jwt-token');
  sessionStorage.removeItem('user-detail');
  // alert("logout success");
  this.router.navigate(['/signin'])

}



isLoggedIn(){
  return this.service.checkToken();
}
}
