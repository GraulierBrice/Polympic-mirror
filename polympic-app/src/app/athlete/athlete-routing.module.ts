import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AthletePage } from './athlete.page';

const routes: Routes = [
  {
    path: '',
    component: AthletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AthletePageRoutingModule {}
