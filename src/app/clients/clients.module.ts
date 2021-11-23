import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientsManagementComponent } from './clients-management/clients-management.component';
import { Proxy } from '../core/services/proxy.service';
import { CommonService } from '../core/services/common.service';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModule } from '../Material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClientsComponent, ClientsManagementComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    Proxy,
    CommonService
  ]
})
export class ClientsModule { }
