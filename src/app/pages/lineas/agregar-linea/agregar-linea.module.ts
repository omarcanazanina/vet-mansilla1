import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarLineaPageRoutingModule } from './agregar-linea-routing.module';

import { AgregarLineaPage } from './agregar-linea.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarLineaPageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule,//componentes
  ],
  declarations: [AgregarLineaPage]
})
export class AgregarLineaPageModule {}
