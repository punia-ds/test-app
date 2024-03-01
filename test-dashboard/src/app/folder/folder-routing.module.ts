import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'donors',
    loadChildren: () =>
      import('../pages/donors/donors.module').then((m) => m.DonorsPageModule),
  },
  {
    path: 'radios',
    loadChildren: () =>
      import('../pages/radios/radios.module').then((m) => m.RadiosPageModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../pages/categories/categories.module').then(
        (m) => m.CategoriesPageModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('../pages/contacts/contacts.module').then(
        (m) => m.ContactsPageModule
      ),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('../pages/requests/requests.module').then(
        (m) => m.RequestsPageModule
      ),
  },
  {
    path: 'social',
    loadChildren: () =>
      import('../pages/social/social.module').then((m) => m.SocialPageModule),
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('../pages/teams/teams.module').then((m) => m.TeamsPageModule),
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('../pages/posts/posts.module').then((m) => m.PostsPageModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('../pages/clients/clients.module').then(
        (m) => m.ClientsPageModule
      ),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('../pages/app-settings/app-settings.module').then(
        (m) => m.AppSettingsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
