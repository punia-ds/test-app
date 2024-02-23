import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandiAllPage } from './mandi-all.page';

const routes: Routes = [
  {
    path: '',
    component: MandiAllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandiAllPageRoutingModule {}
