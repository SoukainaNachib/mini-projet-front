import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categories: any[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((res: any[]) => (this.categories = res["data"]))
  }

}
