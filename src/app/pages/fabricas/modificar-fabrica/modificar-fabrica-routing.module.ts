import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarFabricaPage } from './modificar-fabrica.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarFabricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarFabricaPageRoutingModule {}
