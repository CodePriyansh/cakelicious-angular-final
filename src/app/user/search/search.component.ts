import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productList:any;
  constructor(private productService:ProductService ,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log('component');
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        let searchText = ''+this.activatedRoute.snapshot.paramMap.get('text');
        console.log(searchText)
        this.productService.searchProduct(searchText).subscribe((data: any)=>{
          console.log(data)
          this.productList = data
        })
      }
    })
  }

}
