/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import * as loaderComponents from './components';

import * as loaderGuards from './guards';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, NgxLoadingModule],
  providers: [...loaderGuards.guards],
  declarations: [...loaderComponents.components],
  exports: [...loaderComponents.components]
})
export class LoaderModule {}
