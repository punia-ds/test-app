import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SocialPageRoutingModule,ReactiveFormsModule],
  declarations: [SocialPage, AddComponent],
})
export class SocialPageModule {}
