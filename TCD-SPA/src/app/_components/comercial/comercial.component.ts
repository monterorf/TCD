import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.component.html',
  styleUrls: ['./comercial.component.css']
})
export class ComercialComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  redirect(routex: string){
    this.router.navigateByUrl('/'+routex)
  }
}
