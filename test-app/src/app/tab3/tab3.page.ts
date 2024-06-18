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
  isApp: Boolean = true;

  socials = [
    {
      label: 'Facebook',
      icon: 'logo-facebook',
      link: 'https://facebook.com',
      class: 'fb',
    },
    {
      label: 'Instagram',
      icon: 'logo-instagram',
      link: 'https://instagram.com',
      class: 'insta',
    },
    {
      label: 'YouTube',
      icon: 'logo-youtube',
      link: 'https://youtube.com',
      class: 'youtube',
    },
    {
      label: 'WhatsApp',
      icon: 'logo-whatsapp',
      link: 'https://whatsapp.com',
      class: 'whatsapp',
    },
    {
      label: 'Website',
      icon: 'link-outline',
      link: 'http://weareharyanvi.com',
      class: 'link',
    },
  ];

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

  redirect(social: any) {
    window.open(social?.link, '_blank');
  }

  handleCancel() {
    console.log('cancel');
  }
}
