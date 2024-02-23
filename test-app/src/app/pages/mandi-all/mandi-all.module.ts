import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandiAllPageRoutingModule } from './mandi-all-routing.module';

import { MandiAllPage } from './mandi-all.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandiAllPageRoutingModule,
    TranslateModule,
  ],
  declarations: [MandiAllPage],
})
export class MandiAllPageModule {}
