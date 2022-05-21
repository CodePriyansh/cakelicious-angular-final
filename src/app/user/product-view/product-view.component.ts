import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  productList :Product[]|any;
  id:any;
  size: any=1;
  egg: any;
  constructor(private product:ProductService ,private route: ActivatedRoute,
    private router: Router  , private cartService:CartService ,private toastr:ToastrService) {

      this.route.params.subscribe((params: Params) => {
        this.id = params["pId"];
        console.log(this.id);
      });

    this.product.getProductbypId(this.id).subscribe(data=>{
      console.log(data)
      this.productList =data;
    })
  }
  userId: any;
  // id: any;
  ID: any = [];
  userData: any;
  cartItems: any = [];
  ItemsLength: any;
  qty:any=1;
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


  getEgg(event:any){
    this.egg = event.target.value
   console.log(event.target.value)
  }

  plus(){
    if(this.qty>0){
    this.qty += 1
    console.log(this.qty)}
  }
  minus(){
    if(this.qty>1){

    this.qty -= 1
    console.log(this.qty)
    }
  }

   getSize(event:any){
     this.size=event.target.value;
    console.log(event.target.value)
   }


  ngOnInit(): void {
    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;

  }

}
