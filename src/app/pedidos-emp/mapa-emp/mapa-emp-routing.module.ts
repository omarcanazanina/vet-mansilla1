import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaEmpPage } from './mapa-emp.page';

const routes: Routes = [
  {
    path: '',
    component: MapaEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaEmpPageRoutingModule {}
