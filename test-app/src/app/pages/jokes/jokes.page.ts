import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
})
export class JokesPage implements OnInit {
  constructor(
    private modalCtrl:ModalController
  ) {}

  ngOnInit() {}

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }
}
