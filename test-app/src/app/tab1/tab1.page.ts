import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../services/storage.service';
import { LanguageService } from '../services/language.service';
import { Howl } from 'howler';
import { AppService } from '../services/app.service';
import { LoadingService } from '../services/loading.service';
import { SeoService } from '../services/seo.service';
import { interval, takeWhile } from 'rxjs';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterContentInit {
  player: any;
  url: any;
  isPlaying: Boolean = false;
  app: any;
  constructor(
    private appSer: AppService,
    private loadingSer: LoadingService,
    private translate: TranslateService,
    private seoService: SeoService,
    private songSer: SongService,
    private router: Router
  ) {
    this.appSer.appDetails$.subscribe((res) => {
      this.app = res;
      this.url = this.app.streamingUrl;
    });
  }

  ngAfterContentInit(): void {
    this.setupPlayer({
      src: this.url,
    });
  }

  ngOnInit(): void {
    setInterval(() => {
      this.getSongDetails();
    }, 20000);
    this.seoService.setSEOData(
      'Radio Haryanvi',
      'RH HR',
      'HR,RH',
      'https://images.pexels.com/photos/19400187/pexels-photo-19400187/free-photo-of-a-car-in-a-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    );
  }

  songRes: any;
  song: any;
  getSongDetails() {
    this.songSer.getSong().subscribe((res) => {
      this.songRes = res;
      this.song = this.songRes.icestats?.source.yp_currently_playing.replace(
        /YouTube/g,
        ''
      );
    });
  }

  setupPlayer(details: any) {
    let src = details?.src;
    this.player = new Howl({
      src: [src],
      html5: true,
      onplay: (p) => {
        console.log('playing', p);
        this.getSongDetails();
        this.startTimer();
      },
      onloaderror: () => {
        console.log('error loading');
        this.loadingSer.dismissLoading();
      },
      onplayerror: () => {
        console.log('error loading');
        this.loadingSer.dismissLoading();
      },
    })
      .on('end', () => this.loadingSer.dismissLoading())
      .on('play', () => this.loadingSer.dismissLoading())
      .on('stop', () => this.loadingSer.dismissLoading())
      .on('pause', () => this.loadingSer.dismissLoading());
  }

  playStop() {
    this.loadingSer.presentLoading(
      this.translate.instant('app.HOME.RADIO.LOADING')
    );
    if (!this.isPlaying) {
      this.player.play();
      this.isPlaying = true;
      return;
    } else {
      this.player.stop();
      this.isPlaying = false;
      this.stopTimer();
      setTimeout(() => {
        this.loadingSer.dismissLoading();
      }, 700);
      return;
    }
  }

  // stopwatch
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isActive: boolean = false;
  intervalId: any;
  startTimer() {
    if (!this.isActive) {
      this.isActive = true;
      this.intervalId = interval(1000) // Update every second
        .pipe(takeWhile(() => this.isActive))
        .subscribe(() => {
          this.seconds++;
          if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
          }
          if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
          }
        });
    }
  }

  stopTimer() {
    this.isActive = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
    }
  }

  goToPage(url: string) {
    this.router.navigateByUrl(`${url}`);
  }

  // icons url
  iconPath(icon: string) {
    let path = '../../assets/images/gif/' + icon + '.gif';
    return path;
  }
}
