import { FormsModule } from '@angular/forms';
import { LayoutModule } from './../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

import { MaterialModule } from '../Material/material.module';
import { ProductManagementComponent } from './product-management/product-management.component';
import { ImageUploadModule } from 'angular2-image-upload';


@NgModule({
  declarations: [ProductComponent, ProductManagementComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    LayoutModule,
    FormsModule,
    ImageUploadModule,
    MaterialModule
  ]
})
export class ProductModule { }
