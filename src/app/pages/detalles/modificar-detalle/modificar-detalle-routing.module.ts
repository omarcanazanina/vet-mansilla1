import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarDetallePage } from './modificar-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarDetallePageRoutingModule {}
