import { MaterialModule } from './../Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {LayoutModule} from './../layout/layout.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrdersSubmittedComponent } from './orders-submitted/orders-submitted.component';
import { OrdersSentComponent } from './orders-sent/orders-sent.component';
import { OrdersCompletedComponent } from './orders-completed/orders-completed.component'


@NgModule({
  declarations: [OrdersComponent, OrderManagementComponent, OrdersSubmittedComponent, OrdersSentComponent, OrdersCompletedComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    LayoutModule,
    MaterialModule,
    NgxSpinnerModule
  ]
})
export class OrdersModule { }
