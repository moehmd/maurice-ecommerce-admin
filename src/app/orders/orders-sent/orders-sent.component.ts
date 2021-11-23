import { CommonService } from 'src/app/core/services/common.service';
import { OrderManagementComponent } from '.././order-management/order-management.component';
import { Params_Get_Order_By_STATUS_ID, Params_Delete_Order, Status, Params_Get_Status_By_OWNER_ID } from '.././../core/services/proxy.service';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DataTableColumn } from '../../core/models/data-table-columns';
import { TableActions } from '../../core/Models/table-actions';
import { Order , Proxy } from '../../core/services/proxy.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { DeleteConfirmationComponent } from '../../layout/delete-confirmation/delete-confirmation.component';
@Component({
  selector: 'app-orders-sent',
  templateUrl: './orders-sent.component.html',
  styleUrls: ['./orders-sent.component.css']
})
export class OrdersSentComponent implements OnInit, OnDestroy {
  StatusList: Status[];
  _params_Get_Status_By_OWNER_ID = new Params_Get_Status_By_OWNER_ID();
  public tableColumns: DataTableColumn[] = [
    { name: 'ENTRY_DATE', display: 'Date' },
    { name: 'PAY_TO', display: 'Pour' },
    { name: 'AMMOUNT', display: 'Addresse'},
    { name: "dropDown", display: "Statut" },
    { name: 'actions', display: 'Actions' }
  ];
  public tableActions: TableActions[] = [TableActions.delete];
  public subscriptions: Subscription[] = [];
  orderArray: Order[] = [];
  private onRefreshOrders: EventEmitter<any> = new EventEmitter();
  public paramsGetorders = new Params_Get_Order_By_STATUS_ID();
  constructor(private proxy: Proxy,private CmSvc:CommonService, private dialog: MatDialog , private SpinnerService: NgxSpinnerService) {}

  ngOnInit(): void {
    this._params_Get_Status_By_OWNER_ID.OWNER_ID = 1;
this.subscriptions.push( this.proxy.Get_Status_By_OWNER_ID(this._params_Get_Status_By_OWNER_ID).subscribe(result => this.StatusList = result));
    this.subscriptions.push(this.handleOrders().subscribe());
    this.refreshOrders();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshOrders() {
    this.onRefreshOrders.emit();
  }

  public handleOrders(): Observable<any> {
    this.SpinnerService.show();
    this.paramsGetorders.STATUS_ID = 1;
    return this.onRefreshOrders.pipe(
      switchMap(() => {
        return this.proxy.Get_Order_By_STATUS_ID_Adv(this.paramsGetorders);
      }),
      switchMap((Orders) => {
        this.setOrders(Orders);
        return of(true);
      })
    );
  }

  private setOrders(Orders: Order[]) {
    this.orderArray = [].concat(Orders);
    this.SpinnerService.hide();
  }
  Delete(entry: Order) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Order = new Params_Delete_Order();
          _params_Delete_Order.ORDER_ID = entry.ORDER_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Order(_params_Delete_Order)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshOrders();
                  this.orderArray.splice(this.orderArray.indexOf(entry), 1);
                }
              })
          );
        }
      })
    );
  }

  manageBanners(obj: any = null) {
    const dialofRef = this.dialog.open(OrderManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        if (refreshData) {
          this.refreshOrders();
        }
      })
    );
  }
  Edit(current) {
    this.proxy.Edit_Order(current).subscribe((result) => {
          if (result != null) {
    this.CmSvc.ShowMessage('Votre ordre a été enregistrée');
    if (current.PRODUCT_ID === -1) {
    this.orderArray.splice(this.orderArray.indexOf(current), 1);
    const newEntry: any = result;
    newEntry.MyUploadedImages = [];
    newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_ORDER]&REL_FIELD=ORDER_IMAGE&REL_KEY=' + newEntry.ORDER_ID;
    this.orderArray.unshift(newEntry);
    }
    }
    });
    }
}
