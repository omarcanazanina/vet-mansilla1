import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePedidoEmpPageRoutingModule } from './detalle-pedido-emp-routing.module';

import { DetallePedidoEmpPage } from './detalle-pedido-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePedidoEmpPageRoutingModule
  ],
  declarations: [DetallePedidoEmpPage]
})
export class DetallePedidoEmpPageModule {}
