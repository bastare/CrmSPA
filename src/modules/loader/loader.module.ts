/** @format */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

import * as loaderComponents from './components';

import * as loaderGuards from './guards';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxLoadingModule.forRoot({
      //animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(255, 255, 255, 0.1)',
      primaryColour: '#1ea',
      secondaryColour: '#f11',
      tertiaryColour: '#1ee'
    })
  ],
  providers: [...loaderGuards.guards],
  declarations: [...loaderComponents.components],
  exports: [...loaderComponents.components]
})
export class LoaderModule {}
