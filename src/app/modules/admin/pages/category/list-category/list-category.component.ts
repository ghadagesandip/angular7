import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService
  ) { }

  categories = [];

  ngOnInit() {

    this.categoryService.getCategories().subscribe(
     (data: any) => {
        this.categories = data.data;
        console.log('data.data', data.data);
      },
      err => {
        console.log('eer', err);
      }
    );
  }

}
