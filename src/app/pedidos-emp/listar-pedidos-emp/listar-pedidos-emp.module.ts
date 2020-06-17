import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarPedidosEmpPageRoutingModule } from './listar-pedidos-emp-routing.module';

import { ListarPedidosEmpPage } from './listar-pedidos-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarPedidosEmpPageRoutingModule
  ],
  declarations: [ListarPedidosEmpPage]
})
export class ListarPedidosEmpPageModule {}
