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
        path: 'fabricas1',
        children: [
         {
           path: '',
           loadChildren: () => import('../pages/fabricas1/index/index.module').then( m => m.IndexPageModule)
         },
         {
          path: 'ver-fabrica',
          loadChildren: () => import('../pages/fabricas1/ver-fabrica/ver-fabrica.module').then( m => m.VerFabricaPageModule)
        },
        {
          path: 'modificar-fabrica',
          loadChildren: () => import('../pages/fabricas1/modificar-fabrica/modificar-fabrica.module').then( m => m.ModificarFabricaPageModule)
        },
          {
            path: 'listar-lineas/:id/:nombre',
            loadChildren: () => import('../pages/lineas/listar-lineas/listar-lineas.module').then(m => m.ListarLineasPageModule)
          },
          {
            path: 'ver-linea',
            loadChildren: () => import('../pages/lineas/ver-linea/ver-linea.module').then( m => m.VerLineaPageModule)
          },
          {
            path: 'listar-productos/:id/:nombre',
            loadChildren: () => import('../pages/productos/listar-productos/listar-productos.module').then(m => m.ListarProductosPageModule)
          },
          {
            path: 'agregar-producto/:id/:nombre',
            loadChildren: () => import('../pages/productos/agregar-producto/agregar-producto.module').then(m => m.AgregarProductoPageModule)
          },
          {
            path: 'ver-producto',
            loadChildren: () => import('../pages/productos/ver-producto/ver-producto.module').then( m => m.VerProductoPageModule)
          },
          {
            path: 'modificar-producto',
            loadChildren: () => import('../pages/productos/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
          },
          {
            path: 'listar-detalles/:idruta/:id/:tipo',
            loadChildren: () => import('../pages/detalles/listar-detalles/listar-detalles.module').then( m => m.ListarDetallesPageModule)
          },
          {
            path: 'agregar-detalle/:idruta/:idproducto/:tipo',
            loadChildren: () => import('../pages/detalles/agregar-detalle/agregar-detalle.module').then( m => m.AgregarDetallePageModule)
          },
          {
            path: 'modificar-detalle',
            loadChildren: () => import('../pages/detalles/modificar-detalle/modificar-detalle.module').then( m => m.ModificarDetallePageModule)
          },
          {
            path: 'ver-detalle',
            loadChildren: () => import('../pages/detalles/ver-detalle/ver-detalle.module').then( m => m.VerDetallePageModule)
          },
        ]
      },
      {
        path: 'pedidos',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/pedidos/listar-pedidos/listar-pedidos.module').then( m => m.ListarPedidosPageModule)
          },
          {
            path: 'ver-pedido',
            loadChildren: () => import('../pages/pedidos/ver-pedido/ver-pedido.module').then( m => m.VerPedidoPageModule)
          },
          {
            path: 'asignar-repartidor',
            loadChildren: () => import('../pages/pedidos/asignar-repartidor/asignar-repartidor.module').then( m => m.AsignarRepartidorPageModule)
          },
       // {
       //  path: '',
       //  loadChildren: () => import('../pages/fabricas1/index/index.module').then( m => m.IndexPageModule)
       //},
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
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
