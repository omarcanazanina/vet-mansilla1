import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLineaPage } from './agregar-linea.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarLineaPageRoutingModule {}
