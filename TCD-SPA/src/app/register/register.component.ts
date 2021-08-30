import { Component, OnInit } from '@angular/core';
import { User } from '../_models/User';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  userForm: FormGroup;
  constructor(private userService:UserService, private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required,Validators.maxLength(50)]],   
      password: ['', Validators.maxLength(100)],      
    });
  }

  createUser() {
    console.log("entro")
    this.user = Object.assign({}, this.userForm.value);
    this.userService.addUser(this.user).subscribe(() => {
      console.log('User has been created successfully');
    }, error => {
        console.log('There has been an issue creating the category');
    });

    /*this.router.navigate(['users']).then(() => {
      window.location.reload();
    });*/
  }

}
