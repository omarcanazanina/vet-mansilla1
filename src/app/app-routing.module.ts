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


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
