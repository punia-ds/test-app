import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  fields = this.translate.instant('app.MORE.LISTS.LANGUAGE.FIELDS');
  selected = this.translate.instant('app.MORE.LISTS.LANGUAGE.SELECTED');
  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {}

  openLanguagePopover(e: any) {
    console.log(e);
  }

  ngOnInit(): void {
    console.log(this.selected);
  }

  handleChange(e: any) {
    const lang = e.target.value;
    this.languageService.setLanguage(lang);
  }

  handleCancel() {
    console.log('cancel');
  }
}
