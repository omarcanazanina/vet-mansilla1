import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePedidoEmpPage } from './detalle-pedido-emp.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePedidoEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePedidoEmpPageRoutingModule {}
