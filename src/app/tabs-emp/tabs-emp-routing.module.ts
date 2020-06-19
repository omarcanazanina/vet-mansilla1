import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsEmpPage } from './tabs-emp.page';

const routes: Routes = [

  {
    path: '',
    component: TabsEmpPage,
    children: [
      {
        path: 'pedidos',
        children: [
         //{
         //  path: '',
         //  loadChildren: () => import('../pages/pedidos/listar-pedidos/listar-pedidos.module').then( m => m.ListarPedidosPageModule)
         //},
         {
          path: '',
          loadChildren: () => import('../pedidos-emp/listar-pedidos-emp/listar-pedidos-emp.module').then( m => m.ListarPedidosEmpPageModule)
        },
        {
          path: 'detalle-pedido-emp',
          loadChildren: () => import('../pedidos-emp/detalle-pedido-emp/detalle-pedido-emp.module').then( m => m.DetallePedidoEmpPageModule)
        },
        {
          path: 'historial-emp',
          loadChildren: () => import('../pedidos-emp/historial-emp/historial-emp.module').then( m => m.HistorialEmpPageModule)
        },
        {
          path: 'mapa-emp',
          loadChildren: () => import('../pedidos-emp/mapa-emp/mapa-emp.module').then( m => m.MapaEmpPageModule)
        },
     
         // {
         //   path: 'ver-pedido',
         //   loadChildren: () => import('../pages/pedidos/ver-pedido/ver-pedido.module').then( m => m.VerPedidoPageModule)
         // },
         // {
         //   path: 'asignar-repartidor',
         //   loadChildren: () => import('../pages/pedidos/asignar-repartidor/asignar-repartidor.module').then( m => m.AsignarRepartidorPageModule)
         // },
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
        redirectTo: '/tabs/pedidos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pedidos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsEmpPageRoutingModule {}
