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
          {
            path: '',
            loadChildren: () => import('../pages/fabricas/index/index.module').then(m => m.IndexPageModule)
          },
          {
            path: 'listar-lineas/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/listar-lineas/listar-lineas.module').then(m => m.ListarLineasPageModule)
          },
          {
            path: 'listar-productos/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/listar-productos/listar-productos.module').then(m => m.ListarProductosPageModule)
          },
          {
            path: 'agregar-producto/:id/:nombre',
            loadChildren: () => import('../pages/fabricas/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
          },
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
