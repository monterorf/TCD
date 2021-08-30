import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:44348/api/account/'
  users: User[];

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }
  
  getUser(id: number)   {
    return this.http.get<User>(this.baseUrl + id);
  }

  login(user: User) {
    return this.http.post(this.baseUrl + 'login', user)
      .pipe(
        map((response:any) => {
          const user = response;
          console.log(response);
          localStorage.setItem('isLoged', 'true');
          localStorage.setItem('user',JSON.stringify(user));
          
        })
      )
  }
  
  addUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  loggedIn() {
    return localStorage.getItem('isLoged');
  }
  
}
