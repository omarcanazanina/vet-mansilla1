import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricasPage } from './fabricas.page';

const routes: Routes = [
  {
    path: '',
    component: FabricasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricasPageRoutingModule {}
