import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './currency.component';
import { CurrencyManagementComponent } from './currency-management/currency-management.component';
import { Proxy } from '../core/services/proxy.service';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../core/services/common.service';
import { MaterialModule } from '../Material/material.module';


@NgModule({
  declarations: [CurrencyComponent, CurrencyManagementComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    Proxy,
    CommonService
  ]
})
export class CurrencyModule { }
