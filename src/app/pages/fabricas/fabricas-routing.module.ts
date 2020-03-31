import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabricasPage } from './fabricas.page';

const routes: Routes = [
  {
    path: '',
    component: FabricasPage
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'listar-lineas',
    loadChildren: () => import('./listar-lineas/listar-lineas.module').then( m => m.ListarLineasPageModule)
  },
  {
    path: 'agregar-linea',
    loadChildren: () => import('./agregar-linea/agregar-linea.module').then( m => m.AgregarLineaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricasPageRoutingModule {}
