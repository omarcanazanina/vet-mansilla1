import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarPedidosPage } from './listar-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarPedidosPageRoutingModule {}
