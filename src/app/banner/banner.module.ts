import { LayoutModule } from './../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { MaterialModule } from '../Material/material.module';
import { BannerManagementComponent } from './banner-management/banner-management.component';
import { ImageUploadModule } from 'angular2-image-upload';


@NgModule({
  declarations: [BannerComponent, BannerManagementComponent],
  imports: [
    CommonModule,
    BannerRoutingModule,
    FormsModule,
    MaterialModule,
    LayoutModule,
    ImageUploadModule.forRoot(),
  ]
})
export class BannerModule { }
