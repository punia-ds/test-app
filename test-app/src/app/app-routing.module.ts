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
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'jokes',
    loadChildren: () => import('./pages/jokes/jokes.module').then( m => m.JokesPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
