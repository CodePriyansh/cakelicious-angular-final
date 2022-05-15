import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/model/product';
import { Occassion } from 'src/app/model/occassion';
import { Router } from '@angular/router';
import { FlavourService } from 'src/app/services/flavour.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  exclusiveList:Product[]|any;
  occassionList:Occassion[]|any;
  flavourList: any;
  constructor(private productService:ProductService,private router: Router, private toastr: ToastrService,private flavourService:FlavourService) {
    this.productService.getProductbyCategory("6280ffc166388dbc10c22570").subscribe((data: any)=>{
      console.log(data);
      this.exclusiveList=data;
    })

    this.productService.getOccassion().subscribe((data: any)=>{
      console.log(data);
      this.occassionList=data;
    })



  }
  what_we_offer_options: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      },
      1200:{
        items:3
      },
      1300:{
        items:3
      },
      1500:{
        items:3
      }
    },
    nav: true
  }

  product_options: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,

    navText: ['<i class="fa fa-caret-left" aria-hidden="true"></i>', '<i class="fa fa-caret-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 800,
    animateIn:true,
    animateOut:true,

    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
  ngOnInit(): void {
    this.flavourService.getFlaovurList().subscribe(data=>{
      this.flavourList = data;
    },err=>{
      if(err instanceof HttpErrorResponse){
         if(err.status == 500)
           alert('Something went wrong...')
;       }
    })
  }

}
