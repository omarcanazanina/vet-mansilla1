import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistratePageRoutingModule } from './registrate-routing.module';

import { RegistratePage } from './registrate.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistratePageRoutingModule,
    ReactiveFormsModule,// importamos el formsmodule
    ComponentsModule,//componentes
  ],
  declarations: [RegistratePage]
})
export class RegistratePageModule {}
