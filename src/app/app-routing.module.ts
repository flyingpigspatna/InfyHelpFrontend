import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { ShoworderstatusComponent } from './showorderstatus/showorderstatus.component';
import { UpdateorderstatusComponent } from './updateorderstatus/updateorderstatus.component';
import { InsightsComponent } from './insights/insights.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'placeOrder', component: PlaceorderComponent},
  {path: 'showOrderStatus', component: ShoworderstatusComponent},
  {path: 'updateOrderStatus', component: UpdateorderstatusComponent},
  {path: 'insights', component: InsightsComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
