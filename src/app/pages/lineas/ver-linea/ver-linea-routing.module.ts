import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerLineaPage } from './ver-linea.page';

const routes: Routes = [
  {
    path: '',
    component: VerLineaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerLineaPageRoutingModule {}
