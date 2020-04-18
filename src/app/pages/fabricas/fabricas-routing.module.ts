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
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'listar-productos',
    loadChildren: () => import('./listar-productos/listar-productos.module').then( m => m.ListarProductosPageModule)
  },
  {
    path: 'listar-detalles',
    loadChildren: () => import('./listar-detalles/listar-detalles.module').then( m => m.ListarDetallesPageModule)
  },
  {
    path: 'agregar-detalle',
    loadChildren: () => import('./agregar-detalle/agregar-detalle.module').then( m => m.AgregarDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricasPageRoutingModule {}
