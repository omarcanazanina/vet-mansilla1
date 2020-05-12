import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerFabricaPage } from './ver-fabrica.page';

const routes: Routes = [
  {
    path: '',
    component: VerFabricaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerFabricaPageRoutingModule {}
