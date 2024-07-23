import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../service2/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private router:Router, private config:ConfigService) { }

  ngOnInit(): void {
  }
  login(){
    console.log("vvvv======");
    console.log(this.email)
   if(this.email==="admin@gmail.com" && this.password==="admin") {
// this.router.navigate(['room','add']);
// we can also use the following
this.router.navigateByUrl("room/add")
    alert("Login succeded")
   }
   else{
    alert("login failed")
   }
  }

}
