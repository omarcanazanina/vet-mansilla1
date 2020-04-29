import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/usuarios/index/index.module').then( m => m.IndexPageModule)
          },
          {
            path: 'crear',
            loadChildren: () => import('../pages/usuarios/crear/crear.module').then( m => m.CrearPageModule)
          },
          {
            path: 'modificar',
            loadChildren: () => import('../pages/usuarios/modificar/modificar.module').then( m => m.ModificarPageModule)
          },
          {
            path: 'ver',
            loadChildren: () => import('../pages/usuarios/ver/ver.module').then( m => m.VerPageModule)
          },
        ]
      },
      {
        path: 'fabricas',
        children: [
         //{
         //  path: 'index',
         //  loadChildren: () => import('../pages/fabricas1/index/index.module').then( m => m.IndexPageModule)
         //},
          {
            path: '',
            loadChildren: () => import('../pages/fabricas/index/index.module').then(m => m.IndexPageModule)
          },
          {
            path: 'listar-lineas/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/listar-lineas/listar-lineas.module').then(m => m.ListarLineasPageModule)
            //loadChildren: () => import('../pages/lineas/listar-lineas/listar-lineas.module').then(m => m.ListarLineasPageModule)
          },
          {
            path: 'listar-productos/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/listar-productos/listar-productos.module').then(m => m.ListarProductosPageModule)
          },
          {
            path: 'agregar-producto/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
          },
          {
            path: 'listar-detalles/:idruta/:id/:tipo',
            loadChildren: () => import('../pages/fabricas/listar-detalles/listar-detalles.module').then( m => m.ListarDetallesPageModule)
          },
          {
            path: 'agregar-detalle/:idruta/:idproducto/:tipo',
            loadChildren: () => import('../pages/fabricas/agregar-detalle/agregar-detalle.module').then( m => m.AgregarDetallePageModule)
          }, {
            path: 'ver-fabrica',
            loadChildren: () => import('../pages/fabricas/ver-fabrica/ver-fabrica.module').then( m => m.VerFabricaPageModule)
          },
          {
            path: 'modificar-fabrica',
            loadChildren: () => import('../pages/fabricas/modificar-fabrica/modificar-fabrica.module').then(m => m.ModificarFabricaPageModule)
          },
          {
            path: 'ver-linea',
            loadChildren: () => import('../pages/fabricas/ver-linea/ver-linea.module').then( m => m.VerLineaPageModule)
          },
          {
            path: 'modificar-linea',
            loadChildren: () => import('../pages/fabricas/modificar-linea/modificar-linea.module').then( m => m.ModificarLineaPageModule)
          },
          {
            path: 'ver-producto',
            loadChildren: () => import('../pages/fabricas/ver-producto/ver-producto.module').then( m => m.VerProductoPageModule)
          },
          {
            path: 'modificar-producto',
            loadChildren: () => import('../pages/fabricas/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
          },
          {
            path: 'ver-detalle',
            loadChildren: () => import('../pages/fabricas/ver-detalle/ver-detalle.module').then( m => m.VerDetallePageModule)
          },
          {
            path: 'modificar-detalle',
            loadChildren: () => import('../pages/fabricas/modificar-detalle/modificar-detalle.module').then( m => m.ModificarDetallePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          },
         
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
