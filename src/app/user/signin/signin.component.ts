import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user:User = new User("","","","")
  constructor(
    private service: LoginService,
    private toastr: ToastrService,
    private social: SocialAuthService,
    private router: Router
  ) {}

  signinWithGoogle() {
    this.social.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>{
      this.social.authState.subscribe((data) => {
        console.log(data.email);
        this.service.SignInGoogle(data.email).subscribe((data) => {
          console.log(data.token)
          if (data.status=="login-success") {
            this.toastr.success('Login Success', 'WELCOME TO CAKELICIOUS');
            sessionStorage.setItem('jwt-token', data.token);
            sessionStorage.setItem('user-detail', JSON.stringify(data));
            this.router.navigate(['/']);
          } else {
            alert('Email is Not Rgisterd with us ');
            this.router.navigate(['signup']);
          }
        });
      });
    }).catch((err)=>{
      console.log(err)
    })
  }

  public signIn() {
    this.service.signInn(this.user).subscribe((data: any) => {
      console.log(data)
      if(data.msg=="Not varified"){
        this.toastr.warning("Please go to your mail  id and  first verify your email.")
      }
      else{
        this.toastr.success('login Success');
      this.router.navigate(['/']);
      
      }
    });
  }

  

  
  
  ngOnInit(): void {}
}
