import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://localhost:44348/api/account/'
  users: User[];
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();

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
          this.currentUserSource.next(user);
        })
      )
  }
  
  addUser(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    console.log("Entró al loggedIn");
    return localStorage.getItem('isLoged');
  }
  
}
