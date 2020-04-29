import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarProductoPageRoutingModule } from './modificar-producto-routing.module';

import { ModificarProductoPage } from './modificar-producto.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarProductoPageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule//componentes
  ],
  declarations: [ModificarProductoPage]
})
export class ModificarProductoPageModule {}
