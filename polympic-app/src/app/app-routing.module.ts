import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'athletes',
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: ':athleteId',
        loadChildren: () => import('./athlete/athlete.module').then(m => m.AthletePageModule)
      }
    ]
  },
  {
    path: 'teams',
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: ':teamId',
        loadChildren: () => import('./team/team.module').then(m => m.TeamPageModule)
      }
    ]
    
  },
  {
    path: 'sports-favorite',
    loadChildren: () => import('./sports-favorite/sports-favorite.module').then( m => m.SportsFavoritePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
