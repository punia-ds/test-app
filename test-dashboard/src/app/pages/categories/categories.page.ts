import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoryService } from 'src/app/services/category.service';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  constructor(
    private catSer: CategoryService,
    private modalCtrl: ModalController
  ) {}

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

  async openAdd() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
    });
    await modal.present();
  }
  async openEdit(cat: any) {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      componentProps: {
        cat,
      },
    });
    await modal.present();
  }

  changeStatus(cat: any) {
    this.catSer
      .updateCatStatus({ _id: cat._id, status: 'active' })
      .subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      });
  }

  async deleteCat(_id: any) {
    this.catSer.deleteCat(_id).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
