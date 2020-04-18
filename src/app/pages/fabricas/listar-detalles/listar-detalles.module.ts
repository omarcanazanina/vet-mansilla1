import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDetallesPageRoutingModule } from './listar-detalles-routing.module';

import { ListarDetallesPage } from './listar-detalles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDetallesPageRoutingModule
  ],
  declarations: [ListarDetallesPage]
})
export class ListarDetallesPageModule {}
