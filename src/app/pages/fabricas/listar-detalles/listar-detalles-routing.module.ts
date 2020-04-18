import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarDetallesPage } from './listar-detalles.page';

const routes: Routes = [
  {
    path: '',
    component: ListarDetallesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarDetallesPageRoutingModule {}
