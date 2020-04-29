import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarLineasPage } from './listar-lineas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarLineasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarLineasPageRoutingModule {}
