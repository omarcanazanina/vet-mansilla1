import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPedidosEmpPage } from './listar-pedidos-emp.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPedidosEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPedidosEmpPageRoutingModule {}
