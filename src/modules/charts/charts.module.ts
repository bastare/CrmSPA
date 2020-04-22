/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import * as chartsComponents from './components';

import * as chartsContainers from './containers';

import * as chartsGuards from './guards';

import * as chartsServices from './services';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, LoaderModule],
  providers: [...chartsServices.services, chartsGuards.guards],
  declarations: [...chartsContainers.containers, ...chartsComponents.components],
  exports: [...chartsContainers.containers, ...chartsComponents.components]
})
export class ChartsModule {}
