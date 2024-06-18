import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDonorPageRoutingModule } from './add-donor-routing.module';

import { AddDonorPage } from './add-donor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDonorPageRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [AddDonorPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddDonorPageModule {}
