import { UnitManagementComponent } from './unit-management/unit-management.component';
import { CommonService } from './../core/services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitRoutingModule } from './unit-routing.module';
import { UnitComponent } from './unit.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../Material/material.module';
import { Proxy } from '../core/services/proxy.service';


@NgModule({
  declarations: [UnitComponent, UnitManagementComponent],
  imports: [
    CommonModule,
    UnitRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    Proxy,
    CommonService
  ]
})
export class UnitModule { }
