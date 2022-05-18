import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { OccassionService } from 'src/app/services/occassion.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-occassion-wise-cake',
  templateUrl: './occassion-wise-cake.component.html',
  styleUrls: ['./occassion-wise-cake.component.css'],
})
export class OccassionWiseCakeComponent implements OnInit {
  occassionId: any;
  occassionDetail: any = {};
  productbyOccassion:Product[]=[];
  occName: any;
  constructor(
    private route: ActivatedRoute,
    private occassionServe: OccassionService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      this.route.params.subscribe((params) => {
        this.occassionId = params['occassionId'];
        this.occName = params['occName'];
        console.log(this.occassionId);
      });

      if (event instanceof NavigationEnd) {
        this.occassionServe
          .getSingleOccassion(this.occassionId)
          .subscribe((data) => {
            console.log('single');
            console.log(data);
            this.occassionDetail = data;
          });

        this.occassionServe
          .getProductByOccassion(this.occassionId)
          .subscribe((data) => {
            console.log('products');
            this.productbyOccassion = data;

            console.log(data);
          });
      }
    });
  }

  ngOnInit(): void {
   
  }
}
