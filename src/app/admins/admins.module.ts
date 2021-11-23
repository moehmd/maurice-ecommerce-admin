import { CommonService } from './../core/services/common.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins-routing.module';
import { AdminsComponent } from './admins.component';
import { AdminsManagementComponent } from './admins-management/admins-management.component';
import { MaterialModule } from '../Material/material.module';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { Proxy } from '../core/services/proxy.service';


@NgModule({
  declarations: [AdminsComponent, AdminsManagementComponent],
  imports: [
    CommonModule,
    AdminsRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    Proxy,
    CommonService
  ]
})
export class AdminsModule { }
