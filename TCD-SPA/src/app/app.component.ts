import { Component, OnInit } from '@angular/core';
import { User } from './_models/User';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {

  }

  /**
   *
   */
  constructor(private userService: UserService) {}

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.userService.setCurrentUser(user);
  }

  title = 'TCD-SPA';
}
