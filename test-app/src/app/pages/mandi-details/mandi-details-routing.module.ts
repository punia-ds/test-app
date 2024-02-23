import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandiDetailsPage } from './mandi-details.page';

const routes: Routes = [
  {
    path: '',
    component: MandiDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandiDetailsPageRoutingModule {}
