import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';
import { LanguageService } from './services/language.service';
import { MandiService } from './services/mandi.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  language: any = 'en';
  mandi: any;
  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    private languageSer: LanguageService,
    private mandiService: MandiService
  ) {
    this.languageSer.setInitialAppLanguage();
    this.mandiService.getMandiDetails().subscribe((data) => {
      this.mandi = data;
      this.mandiService.mandiDetails.next(this.mandi?.records);
    });
  }

  ngOnInit(): void {
    // this.translate.setDefaultLang(this.language);
    // console.log(this.language);
  }
}
