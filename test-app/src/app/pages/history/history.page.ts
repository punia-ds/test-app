import { Component, OnInit } from '@angular/core';
import { AddComponent } from './add/add.component';
import { Geolocation } from '@capacitor/geolocation';
import { Share } from '@capacitor/share';
import { ModalController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { JokeService } from 'src/app/services/joke.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  name: string = '';
  mobile: string = '';
  user: any = localStorage.getItem('userId');

  latitude!: number;
  longitude!: number;
  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private translate: TranslateService,
    private userSer: UserService,
    private jokeSer: JokeService
  ) {}

  async ngOnInit() {
    await this.getUserLocation();

    this.getJokes();
  }

  jokeRes: any;
  history: any;

  async share(joke: any) {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies',
    });
  }

  getJokes() {
    this.jokeSer.getHistory().subscribe((res) => {
      this.jokeRes = res;
      if (this.jokeRes.status == 200) {
        this.history = this.jokeRes.message;
      } else {
        this.history = [];
      }
    });
  }

  async getUserLocation() {
    const status = await Geolocation.checkPermissions();

    if (status.location !== 'granted') {
      const requestPermission = await Geolocation.requestPermissions();
      if (requestPermission.location !== 'granted') {
        // console.error('Location permission denied');
        return; // Exit if permission denied
      }
    }

    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      // console.log('User location:', this.latitude, this.longitude);
    } catch (error) {
      // console.error('Error getting location:', error);
    }
  }

  async onClick() {
    const modal = await this.modalCtrl.create({
      component: AddComponent,
      breakpoints: [0, 0.8],
      initialBreakpoint: 0.8,
    });
    await modal.present();
  }

  userRes: any;
  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.translate.instant('app.HISTORY.LOGIN.HEADER'),
      inputs: [
        {
          name: 'name',
          placeholder: this.translate.instant('app.HISTORY.LOGIN.FORM.NAME'),
          value: this.name, // Pre-fill with initial name value (optional)
        },
        {
          name: 'mobile',
          placeholder: this.translate.instant('app.HISTORY.LOGIN.FORM.MOBILE'),
          type: 'tel', // Set input type to 'tel' for phone number formatting (optional)
          value: this.mobile, // Pre-fill with initial mobile value (optional)
        },
      ],
      buttons: [
        {
          text: this.translate.instant('app.HISTORY.LOGIN.BUTTONS.CANCEL'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: this.translate.instant('app.HISTORY.LOGIN.BUTTONS.SUBMIT'),
          handler: (data) => {
            this.name = data.name;
            this.mobile = data.mobile;

            let payLoad = {
              name: this.name,
              mobile: this.mobile,
              latitude: this.latitude,
              longitude: this.longitude,
            };

            this.userSer.register(payLoad).subscribe((res) => {
              this.userRes = res;

              if (this.userRes.status == 200) {
                this.user = this.userRes.message;
                localStorage.setItem('userId', this.user);
              }
            });
          },
        },
      ],
    });

    await alert.present();
  }
}
