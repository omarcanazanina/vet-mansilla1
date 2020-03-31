import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FabricasPageRoutingModule } from './fabricas-routing.module';

import { FabricasPage } from './fabricas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FabricasPageRoutingModule
  ],
  declarations: [FabricasPage]
})
export class FabricasPageModule {}
