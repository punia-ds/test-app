import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonorsPageRoutingModule } from './donors-routing.module';

import { DonorsPage } from './donors.page';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, DonorsPageRoutingModule],
  declarations: [DonorsPage, AddComponent, UpdateComponent],
})
export class DonorsPageModule {}
