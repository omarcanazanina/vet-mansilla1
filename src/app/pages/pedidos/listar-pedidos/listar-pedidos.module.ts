import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPedidosPageRoutingModule } from './listar-pedidos-routing.module';

import { ListarPedidosPage } from './listar-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPedidosPageRoutingModule
  ],
  declarations: [ListarPedidosPage]
})
export class ListarPedidosPageModule {}
