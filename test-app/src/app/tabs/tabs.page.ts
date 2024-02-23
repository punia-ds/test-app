import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LNG_KEY, LanguageService } from '../services/language.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit {
  routes: any = [
    {
      tab: 'home',
      href: 'radio/home',
      icon: 'home-outline',
      title: 'app.TABS.HOME',
    },
    {
      tab: 'donation',
      href: 'radio/donation',
      icon: 'water-outline',
      title: this.translate.instant('app.TABS.DONATION'),
    },
    {
      tab: 'more',
      href: 'radio/more',
      icon: 'apps-outline',
      title: this.translate.instant('app.TABS.MORE'),
    },
  ];

  constructor(
    private translate: TranslateService,
    private languageSer: LanguageService
  ) {}

  ngOnInit(): void {}
}
