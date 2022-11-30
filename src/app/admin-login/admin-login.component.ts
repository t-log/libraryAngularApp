import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = ""
  password = ""

  constructor(private router:Router){}

  adminEntry = () =>
  {
    let adminData:any = {"username":this.username,"password":this.password}
    console.log(adminData)
    if (this.username =="admin" && this.password =="12345") {
      alert("Valid Login")
      this.router.navigate(['/entry'])
    }else
    {
      alert("Invalid Login")
      this.username=""
      this.password=""
    }
  }

  
}
