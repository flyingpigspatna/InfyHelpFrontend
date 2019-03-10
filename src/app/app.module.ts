import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ShoworderstatusComponent } from './showorderstatus/showorderstatus.component';
import { UpdateorderstatusComponent } from './updateorderstatus/updateorderstatus.component';
import { InsightsComponent } from './insights/insights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaceorderComponent,
    ShoworderstatusComponent,
    UpdateorderstatusComponent,
    InsightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
