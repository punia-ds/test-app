import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'radio',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'donation',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'more',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'mandi-all',
        loadChildren: () =>
          import('../pages/mandi-all/mandi-all.module').then(
            (m) => m.MandiAllPageModule
          ),
      },
      {
        path: 'mandi-details/:mandi',
        loadChildren: () =>
          import('../pages/mandi-details/mandi-details.module').then(
            (m) => m.MandiDetailsPageModule
          ),
      },
      {
        path: 'requests',
        loadChildren: () =>
          import('../pages/request/request.module').then(
            (m) => m.RequestPageModule
          ),
      },
      {
        path: 'jokes',
        loadChildren: () =>
          import('../pages/jokes/jokes.module').then((m) => m.JokesPageModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('../pages/history/history.module').then(
            (m) => m.HistoryPageModule
          ),
      },
      {
        path: 'programs',
        loadChildren: () =>
          import('../pages/programs/programs.module').then(
            (m) => m.ProgramsPageModule
          ),
      },
      {
        path: 'add-donor',
        loadChildren: () =>
          import('../tab2/add-donor/add-donor.module').then(
            (m) => m.AddDonorPageModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../pages/contact/contact.module').then(
            (m) => m.ContactPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/radio/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/radio/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
