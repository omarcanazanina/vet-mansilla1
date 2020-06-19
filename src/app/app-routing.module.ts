import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard'
import { NologinGuard } from './guards/nologin.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),canActivate:[NologinGuard]
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule),canActivate:[NologinGuard]
  },
  {
    path: 'listar-lineas/:id/:nombre',
    loadChildren: () => import('./pages/lineas/listar-lineas/listar-lineas.module').then( m => m.ListarLineasPageModule)
  },
  {
    path: 'listar-productos',
    loadChildren: () => import('./pages/productos/listar-productos/listar-productos.module').then( m => m.ListarProductosPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./pages/productos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'listar-detalles',
    loadChildren: () => import('./pages/detalles/listar-detalles/listar-detalles.module').then( m => m.ListarDetallesPageModule)
  },
  {
    path: 'agregar-detalle',
    loadChildren: () => import('./pages/detalles/agregar-detalle/agregar-detalle.module').then( m => m.AgregarDetallePageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/fabricas1/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'ver-fabrica',
    loadChildren: () => import('./pages/fabricas1/ver-fabrica/ver-fabrica.module').then( m => m.VerFabricaPageModule)
  },
  {
    path: 'modificar-fabrica',
    loadChildren: () => import('./pages/fabricas1/modificar-fabrica/modificar-fabrica.module').then( m => m.ModificarFabricaPageModule)
  },
  {
    path: 'ver-linea',
    loadChildren: () => import('./pages/lineas/ver-linea/ver-linea.module').then( m => m.VerLineaPageModule)
  },
  {
    path: 'modificar-linea',
    loadChildren: () => import('./pages/lineas/modificar-linea/modificar-linea.module').then( m => m.ModificarLineaPageModule)
  },
  {
    path: 'agregar-linea',
    loadChildren: () => import('./pages/lineas/agregar-linea/agregar-linea.module').then( m => m.AgregarLineaPageModule)
  },
  {
    path: 'ver-producto',
    loadChildren: () => import('./pages/productos/ver-producto/ver-producto.module').then( m => m.VerProductoPageModule)
  },
  {
    path: 'modificar-producto',
    loadChildren: () => import('./pages/productos/modificar-producto/modificar-producto.module').then( m => m.ModificarProductoPageModule)
  },
  {
    path: 'modificar-detalle',
    loadChildren: () => import('./pages/detalles/modificar-detalle/modificar-detalle.module').then( m => m.ModificarDetallePageModule)
  },
  {
    path: 'listar-pedidos',
    loadChildren: () => import('./pages/pedidos/listar-pedidos/listar-pedidos.module').then( m => m.ListarPedidosPageModule)
  },
  {
    path: 'ver-pedido',
    loadChildren: () => import('./pages/pedidos/ver-pedido/ver-pedido.module').then( m => m.VerPedidoPageModule)
  },
  {
    path: 'asignar-repartidor',
    loadChildren: () => import('./pages/pedidos/asignar-repartidor/asignar-repartidor.module').then( m => m.AsignarRepartidorPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'detalle-pedido',
    loadChildren: () => import('./pages/repartidor/detalle-pedido/detalle-pedido.module').then( m => m.DetallePedidoPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/repartidor/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'tabs-emp',
    loadChildren: () => import('./tabs-emp/tabs-emp.module').then( m => m.TabsEmpPageModule)
  },
  {
    path: 'listar-pedidos-emp',
    loadChildren: () => import('./pedidos-emp/listar-pedidos-emp/listar-pedidos-emp.module').then( m => m.ListarPedidosEmpPageModule)
  },
  {
    path: 'detalle-pedido-emp',
    loadChildren: () => import('./pedidos-emp/detalle-pedido-emp/detalle-pedido-emp.module').then( m => m.DetallePedidoEmpPageModule)
  },
  {
    path: 'historial-emp',
    loadChildren: () => import('./pedidos-emp/historial-emp/historial-emp.module').then( m => m.HistorialEmpPageModule)
  },
  {
    path: 'mapa-emp',
    loadChildren: () => import('./pedidos-emp/mapa-emp/mapa-emp.module').then( m => m.MapaEmpPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
