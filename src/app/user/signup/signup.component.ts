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
  constructor(
    private service: LoginService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  public signUp() {
    this.service.signUp(this.user).subscribe((data: any) => {
      this.toastr.success(
        'Congratulations :' +
          data.name +
          ', Your account has been created successfully, Please check your inbox to activate your account..'
      );
      this.router.navigate(['/signin']);
    });
  }


  ngOnInit(): void {}
}
