import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css'],
})
export class OrderViewComponent implements OnInit {
  public form: FormGroup;
  isOrder: any = true;
  user: any;
  userData: any;
  userId: any;
  orderList: any = [];
  rev=false;
  checkEdit=0;
  constructor(private orderServe: OrderService, private fb: FormBuilder,private productServe:ProductService) {
    this.form = this.fb.group({
      rating1: ['', Validators.required],
    });

    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;
    this.orderServe.orderHistoryUser(this.userId).subscribe((data) => {
      if (data.length) {
        this.isOrder = false;
        console.log(data);
        console.log(data[0].orderedItem[0].ProductId);
        this.orderList = data;
      }
    });
  }

  public stars: any = [];

  message: any;
  sendReview(msg: any, pid: any) {
    if(this.checkEdit==0){
    this.productServe.givRating(this.userId,pid,this.x,msg).subscribe((data) => {
         console.log(data)
    }
    )
    console.log("r");
  }else{
    console.log("w")
    console.log(this.revId)
    this.productServe.editRating(this.userId,pid,this.x,msg,this.revId).subscribe((data) => {
      console.log(data)
 }
 )



  }
  }
  x:any;
  ngOnInit(): void {}
  public getStars(event: any, id: any, i: any) {
    let obj = document.getElementById('rating' + id);
    if (obj != null) {
      this.x = event.target.classList.value.split(' ')[1].split('-')[1];
      console.log(this.x);
      if (this.x == 1) {
        obj.innerHTML = 'Very Bad 😞';
      }
      if (this.x == 2) {
        obj.innerHTML = 'Bad 😞';
      }
      if (this.x == 3) {
        obj.innerHTML = 'Not Bad 👍';
      }
      if (this.x == 4) {
        obj.innerHTML = 'Good 😋';
      }
      if(this.x==5){
        obj.innerHTML = 'i Liked It 😍';
      }
    }
  }
    revId:any;
    i=0;
   changeRev(id:any){
     this.i++;
     if(this.i==1){
     this.rev=true;}else{
       this.i=0;
      this.rev=false;
     }
     this.checkEdit=1;
     this.revId = id;
     console.log(this.revId)
   }
}
