import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SubscribeService } from '../subscribe.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const BACKEND_URL = 'http://localhost:3000'; // backend is server

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password="";
  email="";
  
  userarray= [
    {'username': 'bongii', 'birthdate': '14 Jan', 'age': 23, 'email': 'bongii@outmail.com', 'password': '1234', 'valid': true},
    {'username': 'bonnie', 'birthdate': '14 Jan', 'age': 23, 'email': 'bonnie@outmail.com', 'password': '567', 'valid': true},
    {'username': 'bong', 'birthdate': '14 Jan', 'age': 23, 'email': 'bong@outmail.com', 'password': 'abcd', 'valid': true}
  ]

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient, private SubscribeService: SubscribeService) {}

  ngOnInit(): void {
  }

  loginChck(){
    let user = {'email': this.email, 'password': this.password};
    console.log(user);
    this.httpClient.post(BACKEND_URL + '/auth', user)
    this.SubscribeService.assignValue().subscribe((data)=>{
      console.log(data);
      // if (data.ok){
      //   sessionStorage.setItem('email', data.email);
      //   sessionStorage.setItem('password', data.password);
      //   sessionStorage.setItem('username', data.username);
      //   sessionStorage.setItem('birthdate', data.birthdate);
      //   sessionStorage.setItem('age', data.age);
      //   this.router.navigateByUrl('/account');  
      // }else{
      //   console.log(this.email);
      //   console.log(this.password);
      //   alert("Invalid login credentials");
      // }
    });
  }

  // in the loginCHk add the session storage.setitem 

  navbyurl() {
    this.router.navigateByUrl('/login');
  }

  
}
