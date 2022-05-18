import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
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
    private router: Router ,
    private toastr: ToastrService,
    private cartService:CartService
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

  userId: any;
  // id: any;
  ID: any = [];
  userData: any;
  cartItems: any = [];
  ItemsLength: any;
  addCart(id: any) {
    console.log(id)
    console.log(this.userId)
    if (this.userId) {
      this.cartService.getCartItems(this.userId).subscribe((data) => {
        console.log(data);

        if (data) {
          let value: any;
          this.cartItems = data.cartItems;
          this.ItemsLength = this.cartItems.length;
          for (let id of this.cartItems) {
            console.log(id._id);
            this.ID.push(id._id);
          }
          value = this.ID.indexOf(id);
          console.log(value);

          if (value == -1) {
            this.cartService.addtoCart(id, this.userId).subscribe((data) => {
              if (data.status == 'ok') {
                console.log(data);
                this.toastr.success('item Added To CART', 'CakeLicious');
              } else {
                console.log(data);
                alert('item not added');
              }
            });
          } else {
            this.toastr.warning('item Already In Cart', 'CakeLicious');
          }
        } else {
          this.cartService.addtoCart(id, this.userId).subscribe((data) => {
            if (data.status == 'ok') {
              console.log(data);
              this.toastr.success('item Added To CART', 'CakeLicious');
            } else {
              console.log(data);
              alert('item not added');
            }
          });
        }
      });
    } else {
      this.router.navigate(['signin']);
    }
  }



  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;

  }
}
