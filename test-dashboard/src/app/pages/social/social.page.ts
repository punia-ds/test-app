import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from './add/add.component';
import { SocialService } from 'src/app/services/social.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private socialSer: SocialService,
    private alertSer: AlertService
  ) {}

  ngOnInit() {
    this.getSocials();
  }

  socialRes: any;
  socials: any;
  getSocials() {
    this.socialSer.getSocials().subscribe((res: any) => {
      this.socialRes = res;
      if (this.socialRes.status == 200) {
        this.socials = this.socialRes.message;
      } else {
        this.socials = [];
        this.alertSer.presentAlert('Getting', 'Error', this.socialRes.message);
      }
    });
  }

  delete(social: any) {}

  async editModal(social: any) {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
      componentProps: {
        social,
      },
    });
    await modal.present();
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5,
    });
    await modal.present();
  }
}
