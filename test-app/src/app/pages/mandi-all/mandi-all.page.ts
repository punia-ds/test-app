import { Component, OnInit } from '@angular/core';
import { MandiService } from 'src/app/services/mandi.service';

@Component({
  selector: 'app-mandi-all',
  templateUrl: './mandi-all.page.html',
  styleUrls: ['./mandi-all.page.scss'],
})
export class MandiAllPage implements OnInit {
  data: any;
  markets: any;

  constructor(private mandiService: MandiService) {}

  ngOnInit() {
    this.mandiService.mandiDetails.subscribe((m) => {
      this.data = m;
      if (this.data?.length > 0) {
        let marketsArr = this.data?.map((d: any) => d.market);
        const uniqueMarkets = new Set(marketsArr);
        this.markets = [...uniqueMarkets];
        this.mandiService.allMarkets.next([...uniqueMarkets]);
      }
    });
  }
}
