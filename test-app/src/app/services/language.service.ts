import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { Storage } from '@ionic/storage-angular';
import { TranslateService } from '@ngx-translate/core';
import { Platform } from '@ionic/angular';

export const LNG_KEY = 'SELECTED_LANGUAGE';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selected = '';
  language$ = new BehaviorSubject<string>('en');

  constructor(
    private storage: Storage,
    private translate: TranslateService,
    private plt: Platform
  ) {
    this.storage.create();
  }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang() || '';
    this.translate.setDefaultLang(language);

    this.storage.get(LNG_KEY).then((val) => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  getLanguages() {
    return [
      {
        text: 'English',
        value: 'en',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1920px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png',
      },
      {
        text: 'Hindi',
        value: 'hi',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png',
      },
    ];
  }

  setLanguage(lang: any) {
    this.translate.use(lang);
    this.selected = lang;
    this.language$.next(lang);
    this.storage.set(LNG_KEY, lang);
  }
}
