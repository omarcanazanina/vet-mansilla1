import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarDetallePageRoutingModule } from './agregar-detalle-routing.module';

import { AgregarDetallePage } from './agregar-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarDetallePageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule,//componentes
  ],
  declarations: [AgregarDetallePage]
})
export class AgregarDetallePageModule {}
