import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarDetallePageRoutingModule } from './agregar-detalle-routing.module';

import { AgregarDetallePage } from './agregar-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarDetallePageRoutingModule
  ],
  declarations: [AgregarDetallePage]
})
export class AgregarDetallePageModule {}
