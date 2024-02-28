import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  constructor(private catSer: CategoryService) {}

  catRes: any;
  cats: any;
  ngOnInit() {
    this.catSer.getAllCats().subscribe((res) => {
      this.catRes = res;
      if (this.catRes.status == 200) {
        this.cats = this.catRes.message;
      }
    });
  }
}
