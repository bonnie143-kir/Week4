import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  userarray = [{'email': 'bongg@gmaill.com', 'password': 'abcd'},{'email': 'tom@gmaill.com', 'password': 'abcd'},{'email': 'annie@gmaill.com', 'password': 'abcd'}]


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.routesubscription = this.route.paramMap.subscribe(params => {
    //   this.username;
    // })
  }

  submitted() {
    alert("Submitted");// how to put a link to account page
  }

  loginChck(){
   console.log(this.username)
   console.log(this.password)
   let found = this.userarray.some(e=>(e.email==this.username && e.password == this.password))

   if (found){
      alert("valid user");
      this.router.navigateByUrl('account');
   } else{
  alert("invalid");
   }

  }

  navbyurl() {
    this.router.navigateByUrl('/login');
  }

  
}
