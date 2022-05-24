import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  userData: any;
  userId: any;
  cartItems: any;
  UpdatedCartItems: any;
  Items: any;
  totalAmt: any=0;
  SizeCount: any=0;
  Address:any;
  message:any;
  alterNumber:any;

  constructor(private cartServe: CartService,private orderServe:OrderService,private router:Router,private toastr:ToastrService) {
    this.userData = JSON.parse(sessionStorage.getItem('user-detail') || '{}');
    console.log(this.userData);
    this.userId = this.userData.current_user._id;

  }

  onPay(n: any) {
    if(n==1){
     this.orderServe.CreateOrder(this.totalAmt).subscribe((data) => {
      console.log(data);
      var options = {
        key: 'rzp_test_Wp8VeLBusO80zT', // Enter the Key ID generated from the Dashboard
        amount: 10000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        image: '../../assets/images/logo-name-removebg-preview (1).png',
        order_id: data.id,
        // "qty":this.qty,
        // "size":this.size,
        Address: this.Address,
        message: this.message, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: (response: {
          razorpay_payment_id: any;
          razorpay_order_id: any;
          razorpay_signature: any;
          razorpay_prefill: any;
        }) => {
          console.log(response);
          sessionStorage.setItem('payment-detail', JSON.stringify(response));

          console.log(response, this.userId, this.Address, this.cartItems);
          this.orderServe
            .placeOrder(this.userId,response, this.Address,this.alterNumber, this.cartItems)
            .subscribe((data) => {
              if ((data.msg == 'ok')) {
                this.cartServe.deleteCart(this.userId).subscribe((data) => {
                  console.log(data);
                  this.ngOnInit();
                  // this.router.navigate(['/order-success'])
                  // window.location.reload()
                });
              }
            });
        },
        prefill: {
          name: this.userData.current_user.name,
          email: this.userData.current_user.email,
          contact: this.userData.current_user.mobile,
        },
        notes: {
          address: 'Razorpay Corporate Office',
          myData: {
            first: 'kjhhj',
            second: 'kjhhj',
            third: 'kjhhj',
          },
          qty: 'dkfed',
          size: 'dfkjnjnvn',
          Address: 'wefoneoiwn',
          message: 'fihwe',
        },
        theme: {
          color: '#3399cc',
        },
      };
      var rzp1 = new Razorpay(options);
      rzp1.on(
        'payment.failed',
        function (response: {
          error: {
            code: any;
            description: any;
            source: any;
            step: any;
            reason: any;
            metadata: { order_id: any; payment_id: any };
          };
        }) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        }
      );
      rzp1.open();
    });
  }else{


    this.orderServe.CreateOrder(this.totalAmt).subscribe((data) => {
      console.log(data)
          if(data){
          console.log(this.userId,this.Address,this.alterNumber,data.id,this.totalAmt,this.cartItems)
           this.orderServe.cashOnDelivery(this.userId,this.Address,this.alterNumber,data.id,this.totalAmt,this.cartItems).subscribe(data=>{
               
            if(data.status=='ok'){
              this.toastr.success("order Successfull","cash on Deliver")
              this.router.navigate(['/order-success'])
            }
           })
          }
        })
  }
  }


  deleteCart() {
    this.cartServe.deleteCart(this.userId).subscribe((data) => {
      console.log(data);
      if(data){
        this.ngOnInit()
      }
    });
  }

  deleteItem(pid: any) {
    this.cartServe.deleteOne(this.userId, pid).subscribe((data) => {

      console.log(data);
      if(data){
        this.ngOnInit()
      }
    });
  }



  updateQuantity(i:any,q:any,str:string){
    this.totalAmt=0
     if(str=='QTY'){
      this.cartItems[i].qty=q;
       this.cartItems[i].price=this.cartItems[i].prodPrice*q;
     }else{
       this.cartItems[i].size=q.target.value[0]*1;
     }
     for(let item of this.cartItems){
      this.totalAmt+=(item.price+((item.size-1)*500));
      }

      console.log(this.cartItems)

 }


  ngOnInit(): void {

    this.cartServe.getCartItems(this.userId).subscribe((data) => {
    
      if (data) {
        
        this.cartItems=data.cartItems;
        for(let i=0; i<this.cartItems.length;i++){
      
          this.cartItems[i].size=1;
          this.cartItems[i].price=this.cartItems[i].prodPrice;
          this.cartItems[i].qty=1;
        }
        console.log(this.cartItems)
      this.totalAmt=0;
        for(let item of this.cartItems){
 this.totalAmt+=item.price;
        }
      
        
      } else {
        this.router.navigate(['empty-cart']);
      }
    });
  }
}
