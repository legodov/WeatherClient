import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherComponent } from './weather/weather.component';
import { HistoryComponent } from './history/history.component';
import { ConfigurationsComponent } from './configurations/configurations.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      component: WeatherComponent
    }, {
      path: 'history',
      component: HistoryComponent
    }, {
      path: 'configurations',
      component: ConfigurationsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
