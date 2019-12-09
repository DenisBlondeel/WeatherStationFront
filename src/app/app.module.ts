import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LatestMeasurementComponent } from './components/latest-measurement/latest-measurement.component';
import { OverviewComponent } from './components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestMeasurementComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
