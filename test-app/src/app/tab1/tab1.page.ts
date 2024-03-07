import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../services/storage.service';
import { LanguageService } from '../services/language.service';
import { Howl } from 'howler';
import { AppService } from '../services/app.service';
import { LoadingService } from '../services/loading.service';

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
  constructor(private appSer: AppService, private loadingSer: LoadingService) {
    this.appSer.appDetails$.subscribe((res) => {
      console.log(res);
      this.app = res;
      this.url = this.app.streamingUrl;
    });
  }

  ngAfterContentInit(): void {
    this.setupPlayer({
      src: this.url,
    });
  }

  ngOnInit(): void {}

  setupPlayer(details: any) {
    let src = details?.src;
    this.player = new Howl({
      src: [src],
      html5: true,
      onplay: (p) => {
        console.log('playing', p);
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
    this.loadingSer.presentLoading('Please Wait');
    if (!this.isPlaying) {
      this.player.play();
      this.isPlaying = true;
      return;
    } else {
      this.player.stop();
      this.isPlaying = false;
      return;
    }
  }
}
