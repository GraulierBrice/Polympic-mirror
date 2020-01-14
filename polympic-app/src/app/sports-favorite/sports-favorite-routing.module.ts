import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportsFavoritePage } from './sports-favorite.page';

const routes: Routes = [
  {
    path: '',
    component: SportsFavoritePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsFavoritePageRoutingModule {}
