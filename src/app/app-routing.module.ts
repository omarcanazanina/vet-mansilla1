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
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'lineas/:id/:nombre',
    loadChildren: () => import('./lineas/lineas.module').then( m => m.LineasPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/fabricas/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'fabricas',
    loadChildren: () => import('./pages/fabricas/fabricas.module').then( m => m.FabricasPageModule)
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


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
