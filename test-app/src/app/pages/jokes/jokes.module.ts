import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JokesPageRoutingModule } from './jokes-routing.module';

import { JokesPage } from './jokes.page';
import { TranslateModule } from '@ngx-translate/core';
import { AddComponent } from './add/add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JokesPageRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [JokesPage, AddComponent],
})
export class JokesPageModule {}
