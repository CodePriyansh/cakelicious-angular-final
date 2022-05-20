import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {


  user:any;
  userData: any;
  userId: any;
  orderList: any=[];
  constructor(private orderServe:OrderService) { 
    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;
    this.orderServe.orderHistoryUser(this.userId).subscribe((data) => {
     console.log(data);
     console.log(data[0].orderedItem[0].ProductId)
     this.orderList = data;
     
    })
  }

  ngOnInit(): void {
  }

}
