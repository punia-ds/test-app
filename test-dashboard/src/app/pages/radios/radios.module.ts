import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiosPageRoutingModule } from './radios-routing.module';

import { RadiosPage } from './radios.page';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiosPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RadiosPage,AddComponent]
})
export class RadiosPageModule {}
