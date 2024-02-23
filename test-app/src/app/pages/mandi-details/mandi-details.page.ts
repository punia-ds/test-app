import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MandiService } from 'src/app/services/mandi.service';

@Component({
  selector: 'app-mandi-details',
  templateUrl: './mandi-details.page.html',
  styleUrls: ['./mandi-details.page.scss'],
})
export class MandiDetailsPage implements OnInit {
  mandis: any;
  mandi!: any;
  commodities: any;
  constructor(private ar: ActivatedRoute, private mandiService: MandiService) {
    let mandi = this.ar.snapshot.paramMap.get('mandi');
    this.mandiService.mandiDetails.subscribe((m) => {
      this.mandi = mandi;
      this.mandis = m;
    });
  }

  ngOnInit() {
    let m = this.mandis.filter(
      (m: any) => m.market.toLowerCase() == this.mandi.toLowerCase()
    );
    this.commodities = m;
  }
}
