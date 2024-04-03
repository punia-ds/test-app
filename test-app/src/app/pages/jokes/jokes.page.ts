import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddComponent } from './add/add.component';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@capacitor/geolocation';
import { UserService } from 'src/app/services/user.service';
import { JokeService } from 'src/app/services/joke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
  styleUrls: ['./jokes.page.scss'],
})
export class JokesPage implements OnInit {
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
  jokes: any;
  getJokes() {
    this.jokeSer.getJokes().subscribe((res) => {
      this.jokeRes = res;
      if (this.jokeRes.status == 200) {
        this.jokes = this.jokeRes.message;
      } else {
        this.jokes = [];
      }
    });
  }

  async getUserLocation() {
    const status = await Geolocation.checkPermissions();

    if (status.location !== 'granted') {
      const requestPermission = await Geolocation.requestPermissions();
      if (requestPermission.location !== 'granted') {
        console.error('Location permission denied');
        return; // Exit if permission denied
      }
    }

    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log('User location:', this.latitude, this.longitude);
    } catch (error) {
      console.error('Error getting location:', error);
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
      header: this.translate.instant('app.JOKES.LOGIN.HEADER'),
      inputs: [
        {
          name: 'name',
          placeholder: this.translate.instant('app.JOKES.LOGIN.FORM.NAME'),
          value: this.name, // Pre-fill with initial name value (optional)
        },
        {
          name: 'mobile',
          placeholder: this.translate.instant('app.JOKES.LOGIN.FORM.MOBILE'),
          type: 'tel', // Set input type to 'tel' for phone number formatting (optional)
          value: this.mobile, // Pre-fill with initial mobile value (optional)
        },
      ],
      buttons: [
        {
          text: this.translate.instant('app.JOKES.LOGIN.BUTTONS.CANCEL'),
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: this.translate.instant('app.JOKES.LOGIN.BUTTONS.SUBMIT'),
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
