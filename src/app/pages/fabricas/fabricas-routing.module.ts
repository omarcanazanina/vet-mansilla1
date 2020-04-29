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
 // {
 //  path: 'listar-lineas',
 //  loadChildren: () => import('./listar-lineas/listar-lineas.module').then( m => m.ListarLineasPageModule)
 //},
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
  },
  {
    path: 'modificar-fabrica',
    loadChildren: () => import('./modificar-fabrica/modificar-fabrica.module').then( m => m.ModificarFabricaPageModule)
  },
  {
    path: 'ver-fabrica',
    loadChildren: () => import('./ver-fabrica/ver-fabrica.module').then( m => m.VerFabricaPageModule)
  },
  {
    path: 'ver-linea',
    loadChildren: () => import('./ver-linea/ver-linea.module').then( m => m.VerLineaPageModule)
  },
  {
    path: 'modificar-linea',
    loadChildren: () => import('./modificar-linea/modificar-linea.module').then( m => m.ModificarLineaPageModule)
  },
  {
    path: 'ver-producto',
    loadChildren: () => import('./ver-producto/ver-producto.module').then( m => m.VerProductoPageModule)
  },
  {
    path: 'modificar-producto',
    loadChildren: () => import('./modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  },
  {
    path: 'ver-detalle',
    loadChildren: () => import('./ver-detalle/ver-detalle.module').then( m => m.VerDetallePageModule)
  },
  {
    path: 'modificar-detalle',
    loadChildren: () => import('./modificar-detalle/modificar-detalle.module').then( m => m.ModificarDetallePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FabricasPageRoutingModule {}
