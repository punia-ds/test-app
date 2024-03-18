import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestPageRoutingModule } from './request-routing.module';

import { RequestPage } from './request.page';
import { TranslateModule } from '@ngx-translate/core';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [RequestPage, AddComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RequestPageModule {}
