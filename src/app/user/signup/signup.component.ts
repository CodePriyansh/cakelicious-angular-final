import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User('', '', '', '');
  otp: any;
  constructor(
    private service: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public signUp(val:any) {


        val=""+val;
        console.log(this.otp)
        console.log(val)
    if(val!==this.otp){
this.toastr.error("otp wrong ","try again")
      console.log(val)
    }else{
    console.log(this.user)
    this.service.signUp(this.user).subscribe((data: any) => {
      this.toastr.success(
        'Congratulations :' +
          data.name +
          ', Your account has been created successfully, Please check your Mail inbox to activate your account..'
      );
      this.router.navigate(['/signin']);
    
    });
  }
}

  sendOtp(){

   this.service.verifyOtp(this.user).subscribe(data=>{
     console.log(data)
    this.otp = data.Otp;
   })

  }


  ngOnInit(): void {}
}
