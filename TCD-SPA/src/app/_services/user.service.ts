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
        map((response:User) => {
          const user = response;          
          if (user) {
            localStorage.setItem('user',JSON.stringify(user));            
            this.currentUserSource.next(user);
          }          
        })
      )
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.setCurrentUser(null)
  }
  
  addUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }

  loggedIn() {
    return localStorage.getItem('isLoged');
  }
  
}
