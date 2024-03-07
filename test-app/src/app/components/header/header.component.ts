import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { VibrationService } from 'src/app/services/vibration.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private vibrationSer: VibrationService,
    private alertController: AlertController,
    private translate: TranslateService
  ) {}

  ngOnInit() {}

  async appInfo() {
    await this.vibrationSer.vibrate();
    await this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.translate.instant('app.ALERT.HEADER'),
      subHeader: '',
      message: this.translate.instant('app.ALERT.DESCRIPTION'),
      buttons: [this.translate.instant('app.ALERT.BUTTON')],
    });

    await alert.present();
  }
}
