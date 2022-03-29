import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/Category';
import { CategoryService } from 'src/app/_services/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  id: number;
  private sub: any;
  category: Category;
  editCategoryForm: FormGroup;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
              private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

   this.id = +this.route.snapshot.paramMap.get('id');
   this.createCategoryForm();

   this.loadCategory(this.id);

  }


  loadCategory(id: number) {    
    console.log("From loadCategory", id)
    this.categoryService.getCategory(id).subscribe((category: Category) => {      
      this.category = category;
    });       
  }

  createCategoryForm() {
    this.editCategoryForm = this.fb.group({
      name: ['', [Validators.required,Validators.maxLength(50)]],
      description: ['', Validators.maxLength(100)],     
    });
  }

  editCategory(category: Category) {
    this.categoryService.editCategory(category).subscribe(() => {
    });
    this.router.navigate(['categories']).then(() => {
      window.location.reload();
    });
    }

}
