import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialEmpPage } from './historial-emp.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialEmpPageRoutingModule {}
