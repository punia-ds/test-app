import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSearchFilterModule } from 'ngx-search-filter';
import { SingleDonorComponent } from '../pages/single-donor/single-donor.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    TranslateModule,
    NgxSearchFilterModule,
  ],
  declarations: [Tab2Page, SingleDonorComponent],
})
export class Tab2PageModule {}
