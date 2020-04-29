import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerFabricaPageRoutingModule } from './ver-fabrica-routing.module';

import { VerFabricaPage } from './ver-fabrica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerFabricaPageRoutingModule
  ],
  declarations: [VerFabricaPage]
})
export class VerFabricaPageModule {}
