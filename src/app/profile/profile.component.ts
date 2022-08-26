import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isLoggedIn = false;
  isEdit = false;
  isDone = false;
  isLoggedOut = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navbyurl() {
    this.router.navigateByUrl('/profile');
  }

  edit(){
    this.isEdit = true;
  }

  done(){
    this.isEdit = false;
  }

  logOut(){
    this.isLoggedOut = true;
  }

}
