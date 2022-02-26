import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private userService:UserService,private router: Router,) { }

  ngOnInit(): void {
  }

  loggedIn()  {
    return localStorage.getItem('isLoged');
  }

  login() {
    this.userService.login(this.model).subscribe(next => {
      console.log("Logged in successfully");
      this.router.navigateByUrl('/home');
    })
  }

  signOut(){
    localStorage.removeItem("isLoged")
    this.router.navigateByUrl('');
  }

}
