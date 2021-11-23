import { CommonService } from './../core/services/common.service';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import {LayoutModule} from './../layout/layout.module';
import { CategoriesManagementComponent } from './categories-management/categories-management.component'
import { Proxy } from '../core/services/proxy.service';

@NgModule({
  declarations: [CategoriesComponent, CategoriesManagementComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers:[
    CommonService,
    Proxy
  ]
})
export class CategoriesModule { }
