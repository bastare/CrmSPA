/** @format */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { NavComponent } from '../modules/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxLoadingModule } from 'ngx-loading';
import { ChartsModule } from 'src/modules/charts/charts.module';
import { LoaderModule } from 'src/modules/loader/loader.module';

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    NgxLoadingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
