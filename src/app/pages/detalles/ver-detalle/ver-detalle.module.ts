import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDetallePageRoutingModule } from './ver-detalle-routing.module';

import { VerDetallePage } from './ver-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDetallePageRoutingModule
  ],
  declarations: [VerDetallePage]
})
export class VerDetallePageModule {}
