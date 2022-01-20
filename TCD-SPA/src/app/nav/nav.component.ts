import { Component, OnInit } from '@angular/core';
import { fromEventPattern } from 'rxjs';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private userService:UserService) { }
  loggedIn: boolean;

  ngOnInit(): void {
    this.getCurrentUser();
  }

  // loggedIn()  {
  //   return false;
  // }

  login() {
    this.userService.login(this.model).subscribe(response => {
      
    })
  }

  getCurrentUser() {
    this.userService.currentUser$.subscribe(user => {
      this.loggedIn = !!user
    }, error => {
      console.log(error)
    })
  }

}
