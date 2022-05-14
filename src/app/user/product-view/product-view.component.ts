import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productList :Product[]|any;
  id:any;
  constructor(private product:ProductService ,private route: ActivatedRoute,
    private router: Router ) { 

      this.route.params.subscribe((params: Params) => {
        this.id = params["pId"];
        console.log(this.id);
      });

    this.product.getProductbypId(this.id).subscribe(data=>{
      console.log(data)
      this.productList =data;
    })
  }


  ngOnInit(): void {
    
  }

}
