import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarLineaPageRoutingModule } from './agregar-linea-routing.module';

import { AgregarLineaPage } from './agregar-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarLineaPageRoutingModule
  ],
  declarations: [AgregarLineaPage]
})
export class AgregarLineaPageModule {}
