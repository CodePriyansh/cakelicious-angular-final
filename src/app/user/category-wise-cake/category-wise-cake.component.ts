import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-wise-cake',
  templateUrl: './category-wise-cake.component.html',
  styleUrls: ['./category-wise-cake.component.css'],
})
export class CategoryWiseCakeComponent implements OnInit {
  
  catId: any;
  catName: any;
  productList: Product[] = [];
  constructor(
    private catServe: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log('outer');
    this.router.events.subscribe((event) => {
      console.log('in');

      this.route.params.subscribe((params: Params) => {
        console.log(params);
        this.catId = params['categoryId'];
        this.catName = params['catName'];

        console.log(this.catId);
        console.log(this.catName);
      });

      if (event instanceof NavigationEnd) {
        this.catServe.getProductByCategory(this.catId).subscribe((data) => {
          this.productList = data;
          console.log(data);
        });
      }
    });
  }

  ngOnInit(): void {
    
  }
}
