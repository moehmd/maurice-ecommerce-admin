import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: '', component: DashboardComponent,
  children: [
    {path: '', redirectTo:  'overview' , pathMatch: 'full' } ,
    { path: 'product', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
    { path: 'overview', loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule) },
    { path: 'banner', loadChildren: () => import('../banner/banner.module').then(m => m.BannerModule) },
    { path: 'orders', loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule) },
    { path: 'categories', loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesModule) },
    { path: 'unit', loadChildren: () => import('../unit/unit.module').then(m => m.UnitModule) },
    { path: 'currency', loadChildren: () => import('../currency/currency.module').then(m => m.CurrencyModule) },
    { path: 'clients', loadChildren: () => import('../clients/clients.module').then(m => m.ClientsModule) },
    { path: 'admins', loadChildren: () => import('../admins/admins.module').then(m => m.AdminsModule) },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
