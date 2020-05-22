import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarRepartidorPage } from './asignar-repartidor.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarRepartidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarRepartidorPageRoutingModule {}
