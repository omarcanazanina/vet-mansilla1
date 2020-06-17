import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialEmpPageRoutingModule } from './historial-emp-routing.module';

import { HistorialEmpPage } from './historial-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialEmpPageRoutingModule
  ],
  declarations: [HistorialEmpPage]
})
export class HistorialEmpPageModule {}
