import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, ProfileComponent, OverviewComponent, AccountsComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { CanActivate } from '@angular/router';
import { LoggedInGuard } from './_service/index';

export const ROUTES: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'accounts', component: AccountsComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NoContentComponent }
];
