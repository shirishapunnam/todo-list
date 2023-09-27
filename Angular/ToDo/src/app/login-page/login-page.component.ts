import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  
  username="shirisha" 
  password=''
  errorMessage="Invalid Credentials"
  invalidLogin=false


constructor(private router: Router){}


  ngOnInit(): void {
    
  }
handleLogin(){
  //console.log(this.username);
  if(this.username ==="shirisha" && this.password ==='siri'){
     //console.log(this.username);
     this.router.navigate(['home',this.username])
    this.invalidLogin=false
   

  }
else{
  this.invalidLogin=true
}
}
}
