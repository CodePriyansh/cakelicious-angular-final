import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { FlavourService } from 'src/app/services/flavour.service';

@Component({
  selector: 'app-flavour-vise',
  templateUrl: './flavour-vise.component.html',
  styleUrls: ['.././category-wise-cake/category-wise-cake.component.css']
})
export class FlavourViseComponent implements OnInit {
  fid: any;
  productListByFlavour: Product[] | any;
  flavourname: any;
  constructor(private route: ActivatedRoute, private flavourServe: FlavourService, private router: Router) {

    this.router.events.subscribe(event => {

      this.route.params.subscribe((params: Params) => {
        this.fid = params["fid"];
        this.flavourname = params["fname"];
        console.log(this.fid);
      })

      if (event instanceof NavigationEnd) {

        this.flavourServe.getProductByFlavour(this.fid).subscribe(data => {

          console.log(data)
          this.productListByFlavour = data;
        })
      }

    })
  }
 

  ngOnInit(): void {



  }

}
