import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarRepartidorPageRoutingModule } from './asignar-repartidor-routing.module';

import { AsignarRepartidorPage } from './asignar-repartidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarRepartidorPageRoutingModule
  ],
  declarations: [AsignarRepartidorPage]
})
export class AsignarRepartidorPageModule {}
