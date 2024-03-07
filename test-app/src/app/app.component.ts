import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { LanguageService } from './services/language.service';
import { MandiService } from './services/mandi.service';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  language: any = 'en';
  mandi: any;

  appName: string = 'com.weareharyanvi.www';
  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    private languageSer: LanguageService,
    private mandiService: MandiService,
    private appSer: AppService
  ) {
    this.languageSer.setInitialAppLanguage();
    this.mandiService.getMandiDetails().subscribe((data) => {
      this.mandi = data;
      this.mandiService.mandiDetails.next(this.mandi?.records);
    });
  }

  ngOnInit(): void {
    this.getAppDetails(this.appName);
  }

  detailsRes: any;
  getAppDetails(appName: string) {
    this.appSer.getApp(appName).subscribe((data) => {
      this.detailsRes = data;
      if (this.detailsRes.status == 200) {
        console.log(appName)
        this.appSer.appDetails$.next(this.detailsRes.message);
      }
    });
  }
}
