import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddComponent } from './add/add.component';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.page.html',
  styleUrls: ['./app-settings.page.scss'],
})
export class AppSettingsPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private settingSer: SettingService
  ) {}

  ngOnInit() {
    this.getSettings();
  }

  settingRes: any;
  settings: any;
  getSettings() {
    this.settingSer.getSettings().subscribe((res) => {
      this.settingRes = res;
      if (this.settingRes.status == 200) {
        this.settings = this.settingRes.message;
      } else {
        this.settings = [];
      }
    });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }
  async updateModal(data: any) {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8,
      componentProps: {
        data,
      },
    });
    await modal.present();
  }
}
