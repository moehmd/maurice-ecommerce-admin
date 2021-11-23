import { ProductManagementComponent } from './product-management/product-management.component';
import { Product, Params_Get_Product_By_OWNER_ID , Proxy, Params_Delete_Product } from './../core/services/proxy.service';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DataTableColumn } from '../core/models/data-table-columns';
import { TableActions } from '../core/Models/table-actions';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { DeleteConfirmationComponent } from '../layout/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  public tableColumns: DataTableColumn[] = [
    { name: "ENTRY_DATE", display: "Date" },
    { name: "NAME", display: "Nom" },
    {name:'REFERENCE_NUMBER',display:"Numéro de réference"},
    {name:'RATE',display:"Evaluation"},
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  productsArray: Product[] = [];
  private onRefreshProducts: EventEmitter<any> = new EventEmitter();
  public paramsGetProducts = new Params_Get_Product_By_OWNER_ID();
  constructor(private proxy: Proxy, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleProducts().subscribe());
    this.refreshProducts();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshProducts() {
    this.onRefreshProducts.emit();
  }

  public handleProducts(): Observable<any> {
    this.paramsGetProducts.OWNER_ID = 1;
    return this.onRefreshProducts.pipe(
      switchMap(() => {
        return this.proxy.Get_Product_By_OWNER_ID_Adv(this.paramsGetProducts);
      }),
      switchMap((Products) => {
        this.setProducts(Products);
        return of(true);
      })
    );
  }

  private setProducts(Products: Product[]) {
    this.productsArray = [].concat(Products);
  }
  Delete(entry: Product) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Product = new Params_Delete_Product();
          _params_Delete_Product.PRODUCT_ID = entry.PRODUCT_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Product(_params_Delete_Product)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshProducts();
                  this.productsArray.splice(this.productsArray.indexOf(entry), 1);
                }
              })
          );
        }
      })
    );
  }

  manageProducts(obj: any = null) {
    const dialofRef = this.dialog.open(ProductManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        if (refreshData) {
          this.refreshProducts();
        }
      })
    );
  }
}
