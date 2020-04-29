import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDetallePage } from './ver-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: VerDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDetallePageRoutingModule {}
