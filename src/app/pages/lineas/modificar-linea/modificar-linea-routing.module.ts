import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarLineaPage } from './modificar-linea.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarLineaPageRoutingModule {}
