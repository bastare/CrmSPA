/** @format */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/charts'
  },
  {
    path: 'charts',
    loadChildren: () =>
      import('../modules/charts/charts-routing.module').then(m => m.ChartsRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
