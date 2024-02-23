import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mandi-all',
    loadChildren: () => import('./pages/mandi-all/mandi-all.module').then( m => m.MandiAllPageModule)
  },
  {
    path: 'mandi-details/:mandi',
    loadChildren: () => import('./pages/mandi-details/mandi-details.module').then( m => m.MandiDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
