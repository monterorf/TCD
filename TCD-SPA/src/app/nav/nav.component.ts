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

  ngOnInit(): void {
    
  }

  loggedIn()  {
    return false;
  }

  login() {
    this.userService.login(this.model).subscribe(next => {
      console.log("logged succesfully")
    })
  }

}
