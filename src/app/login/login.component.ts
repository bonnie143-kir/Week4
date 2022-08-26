import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  birthdate="";
  age=0;
  email="";
  userarray= [
    {'username': 'bongii', 'birthdate': '14 Jan', 'age': 23, 'email': 'bongii@outmail.com', 'password': '1234', 'valid': true},
    {'username': 'bonnie', 'birthdate': '14 Jan', 'age': 23, 'email': 'bonnie@outmail.com', 'password': '567', 'valid': true},
    {'username': 'bong', 'birthdate': '14 Jan', 'age': 23, 'email': 'bong@outmail.com', 'password': 'abcd', 'valid': true}
  ]

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.routesubscription = this.route.paramMap.subscribe(params => {
    //   this.username;
    // })
  }

  // submitted() {
  //   this.router.navigateByUrl('/profile')
  //   alert("Submitted");// how to put a link to account page
  // }

  loginChck(){
   console.log(this.email)
   console.log(this.password)
   let found = this.userarray.some(e=>(e.email==this.email && e.password == this.password))
   let session = {};
   if (found){
      session = {"email": this.email, "date": this.birthdate, "age": this.age, "username": this.username}
      alert("valid user");
      this.router.navigateByUrl('/account', session);
   } else{
  alert("invalid");
   }

  }

  navbyurl() {
    this.router.navigateByUrl('/login');
  }

  
}
