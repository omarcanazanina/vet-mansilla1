import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarLineasPageRoutingModule } from './listar-lineas-routing.module';

import { ListarLineasPage } from './listar-lineas.page';
import { AgregarLineaPage } from '../agregar-linea/agregar-linea.page';
import { AgregarLineaPageModule } from '../agregar-linea/agregar-linea.module';

@NgModule({
  entryComponents:[
    AgregarLineaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarLineasPageRoutingModule,
    AgregarLineaPageModule
  ],
  declarations: [ListarLineasPage]
})
export class ListarLineasPageModule {}
