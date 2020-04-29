import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarLineaPageRoutingModule } from './modificar-linea-routing.module';

import { ModificarLineaPage } from './modificar-linea.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarLineaPageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule//componentes
  ],
  declarations: [ModificarLineaPage]
})
export class ModificarLineaPageModule {}
