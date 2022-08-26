import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navbyurl() {
    this.router.navigateByUrl('/profile');
  }

  done(){
    // save details back to session storage and display it on account page
  }

}
