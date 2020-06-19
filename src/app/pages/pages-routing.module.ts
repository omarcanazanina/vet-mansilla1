import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'historial',
    loadChildren: () => import('./repartidor/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pedidos/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'mapa-emp',
    loadChildren: () => import('./pedidos-emp/mapa-emp/mapa-emp.module').then( m => m.MapaEmpPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
