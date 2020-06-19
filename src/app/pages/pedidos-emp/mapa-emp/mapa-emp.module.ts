import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaEmpPageRoutingModule } from './mapa-emp-routing.module';

import { MapaEmpPage } from './mapa-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaEmpPageRoutingModule
  ],
  declarations: [MapaEmpPage]
})
export class MapaEmpPageModule {}
