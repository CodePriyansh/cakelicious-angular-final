import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})

export class OrderViewComponent implements OnInit {
  rating3: number;
  public form: FormGroup;

  user:any;
  userData: any;
  userId: any;
  orderList: any=[];
  constructor(private orderServe:OrderService,private fb:FormBuilder) { 

    
  this.rating3 = 0;
  this.form = this.fb.group({
    rating1: ['', Validators.required],
    rating2: [4]
  });  


    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;
    this.orderServe.orderHistoryUser(this.userId).subscribe((data) => {
      if(data.length){
     console.log(data);
     console.log(data[0].orderedItem[0].ProductId)
     this.orderList = data;}
     
    })
  }


  message:any;
  sendReview(message:any,val:any,pid:any){
 console.log(message,pid,val)
 console.log(this.userId)
  }

  ngOnInit(): void {
  }

}
