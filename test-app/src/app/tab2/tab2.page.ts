import { Component, OnInit } from '@angular/core';
import { DonationService } from '../services/donation.service';
import { LoadingService } from '../services/loading.service';
import { ModalController } from '@ionic/angular';
import { SingleDonorComponent } from '../pages/single-donor/single-donor.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  search!: string;
  imgPath: string = '../../assets/images/blood/';
  constructor(
    private donationService: DonationService, // private translate: TranslateService
    private loadingSer: LoadingService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.getDonors();
  }

  donorsRes: any;
  donors: any;
  getDonors() {
    this.loadingSer.presentLoading('Please Wait...');
    this.donationService.getDonationDetails().subscribe((data) => {
      this.donorsRes = data;
      if (this.donorsRes.status == 200) {
        this.donors = this.donorsRes.message;
      } else {
        this.donors = [];
      }
      if (data) {
        setTimeout(() => {
          this.loadingSer.dismissLoading();
        }, 700);
      }
    });
  }

  async openView(donor: any) {
    const modal = await this.modalCtrl.create({
      component: SingleDonorComponent,
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8,
      cssClass: 'custom-modal-donor',

      componentProps: {
        donor,
      },
    });
    await modal.present();
  }

  imgUrl(b_group: string) {
    let group = b_group.toLowerCase();
    let path = this.imgPath + group + '.png';
    return path;
  }
}
