import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsEmpPageRoutingModule } from './tabs-emp-routing.module';

import { TabsEmpPage } from './tabs-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsEmpPageRoutingModule
  ],
  declarations: [TabsEmpPage]
})
export class TabsEmpPageModule {}
