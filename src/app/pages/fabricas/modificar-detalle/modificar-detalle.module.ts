import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarDetallePageRoutingModule } from './modificar-detalle-routing.module';

import { ModificarDetallePage } from './modificar-detalle.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarDetallePageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule//componentes
  ],
  declarations: [ModificarDetallePage]
})
export class ModificarDetallePageModule {}
