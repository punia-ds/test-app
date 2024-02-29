import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from './add/add.component';
import { RadioService } from 'src/app/services/radio.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-radios',
  templateUrl: './radios.page.html',
  styleUrls: ['./radios.page.scss'],
})
export class RadiosPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private radioSer: RadioService,
    private alertSer: AlertService
  ) {}

  ngOnInit() {
    this.getRadios();
  }

  radioRes: any;
  radios: any;
  getRadios() {
    this.radioSer.getRadios().subscribe((res) => {
      this.radioRes = res;
      if (this.radioRes.status == 200) {
        this.radios = this.radioRes?.message;
      } else {
        this.radios = [];
        this.alertSer.presentAlert('Getting', 'Error', this.radioRes.message);
      }
    });
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddComponent,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
    });
    await modal.present();
  }

  changeStatus(radio: any) {
    this.radioSer
      .updateRadioStatus({ _id: radio._id, status: 'active' })
      .subscribe((res) => {
        window.location.reload();
      });
  }

  deleteRadio(_id: string) {
    this.radioSer.deleteRadio(_id).subscribe((res) => {
      window.location.reload();
    });
  }
}
