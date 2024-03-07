import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  setSEOData(
    title: string,
    description: string,
    keywords: string,
    image: string
  ) {
    this.titleService.setTitle(title);
    this.metaService.addTag({ name: 'description', content: description });
    this.metaService.addTag({ name: 'keywords', content: keywords });
    this.metaService.addTag({ name: 'author', content: 'Umesh Singh Punia' });
    this.metaService.addTag({ name: 'og-title', content: title });
    this.metaService.addTag({ name: 'og:description', content: description });
    this.metaService.addTag({ name: 'og:image', content: image });
  }
}
