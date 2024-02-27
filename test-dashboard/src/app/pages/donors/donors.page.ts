import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DonorService } from 'src/app/services/donor.service';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-donors',
  templateUrl: './donors.page.html',
  styleUrls: ['./donors.page.scss'],
})
export class DonorsPage implements OnInit {
  donorRes: any;
  donors: any;
  constructor(
    private donorSer: DonorService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.donorSer.getDonors().subscribe((res) => {
      this.donorRes = res;
      if (this.donorRes.status == 200) {
        this.donors = this.donorRes.message;
      }
    });
  }

  async openModal(donor: any) {
    const modal = await this.modalCtrl.create({
      component: UpdateComponent,
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.5,
      componentProps: {
        donor,
      },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
  }
}
