import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandiDetailsPageRoutingModule } from './mandi-details-routing.module';

import { MandiDetailsPage } from './mandi-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandiDetailsPageRoutingModule
  ],
  declarations: [MandiDetailsPage]
})
export class MandiDetailsPageModule {}
