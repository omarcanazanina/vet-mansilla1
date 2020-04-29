import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarLineasPageRoutingModule } from './listar-lineas-routing.module';

import { ListarLineasPage } from './listar-lineas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarLineasPageRoutingModule
  ],
  declarations: [ListarLineasPage]
})
export class ListarLineasPageModule {}
