import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarDetallePage } from './agregar-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarDetallePageRoutingModule {}
