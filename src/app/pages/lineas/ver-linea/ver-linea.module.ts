import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerLineaPageRoutingModule } from './ver-linea-routing.module';

import { VerLineaPage } from './ver-linea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerLineaPageRoutingModule
  ],
  declarations: [VerLineaPage]
})
export class VerLineaPageModule {}
