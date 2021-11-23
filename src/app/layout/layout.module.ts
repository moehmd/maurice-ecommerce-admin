import { RouterModule } from '@angular/router';
import { MaterialModule } from './../Material/material.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopnavbarComponent } from "./topnavbar/topnavbar.component";
import { AsidenavbarComponent } from "./asidenavbar/asidenavbar.component";
import { FooternavbarComponent } from "./footernavbar/footernavbar.component";
import { SettingsnavbarComponent } from "./settingsnavbar/settingsnavbar.component";
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent,
    DataTableComponent
  ],
  exports:[
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent,
    DataTableComponent
  ],
  imports: [CommonModule,MaterialModule,RouterModule]
})
export class LayoutModule {}
