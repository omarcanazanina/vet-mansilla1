import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarFabricaPageRoutingModule } from './modificar-fabrica-routing.module';

import { ModificarFabricaPage } from './modificar-fabrica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarFabricaPageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule//componentes
  ],
  declarations: [ModificarFabricaPage]
})
export class ModificarFabricaPageModule {}
