/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as chartsComponents from './components';

import * as chartsContainers from './containers';

import * as chartsGuards from './guards';

import * as chartsServices from './services';
import { ChartsModule } from './charts.module';
import { empty } from 'rxjs';

export interface SBRouteData {
  title?: string;
  activeTopNav?: string;
  breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
  text: string;
  link?: string;
  active?: boolean;
}

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [],
    component: chartsContainers.ChartsComponent
    // data: {
    //   title: 'Charts - SB Admin Angular',
    //   breadcrumbs: [
    //     {
    //       text: 'Dashboard',
    //       link: '/dashboard'
    //     },
    //     {
    //       text: 'Charts',
    //       active: true
    //     }
    //   ]
    // } as SBRouteData
  }
];

@NgModule({
  imports: [ChartsModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ChartsRoutingModule {}
