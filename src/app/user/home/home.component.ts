import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router , private service:LoginService) { }
  signout(){
  sessionStorage.removeItem('jwt-token');
  sessionStorage.removeItem('user-detail');
  // alert("logout success");
  this.router.navigate(['/signin'])

}
isLoggedIn(){
  return this.service.checkToken()
}

  
  ngOnInit(): void {
  }

}
