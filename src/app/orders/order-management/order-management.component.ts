import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { Client,Proxy, Currency, Order, Params_Get_Client_By_OWNER_ID, Product, Status, Product_cart, Params_Delete_Product_cart } from 'src/app/core/services/proxy.service';
import { DeleteConfirmationComponent } from 'src/app/layout/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent implements OnInit , OnDestroy{


  public subscriptions: Subscription[] = [];
  ordersArray: Order[] = [];
  ClientList: Client[];
  _params_Get_Client_By_OWNER_ID = new Params_Get_Client_By_OWNER_ID();

  CurrencyList: Currency[];
  _params_Get_Currency_By_OWNER_ID = new Params_Get_Client_By_OWNER_ID();

  StatusList: Status[];
  _params_Get_Status_By_OWNER_ID = new Params_Get_Client_By_OWNER_ID();

  ProductList: Product[];
  _params_Get_Product_By_OWNER_ID = new Params_Get_Client_By_OWNER_ID();
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<OrderManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._params_Get_Client_By_OWNER_ID.OWNER_ID = 1;
this.subscriptions.push(this.proxy.Get_Client_By_OWNER_ID(this._params_Get_Client_By_OWNER_ID).subscribe(result => this.ClientList = result));

this._params_Get_Currency_By_OWNER_ID.OWNER_ID = 1;
this.subscriptions.push(this.proxy.Get_Currency_By_OWNER_ID(this._params_Get_Currency_By_OWNER_ID).subscribe(result => this.CurrencyList = result)) ;

this._params_Get_Status_By_OWNER_ID.OWNER_ID = 1;
this.subscriptions.push(this.proxy.Get_Status_By_OWNER_ID(this._params_Get_Status_By_OWNER_ID).subscribe(result => this.StatusList = result));


this._params_Get_Product_By_OWNER_ID.OWNER_ID = 1;
this.subscriptions.push(this.proxy.Get_Product_By_OWNER_ID_Adv(this._params_Get_Product_By_OWNER_ID).subscribe(result => this.ProductList = result));

    this.ordersArray = [];
    this.AddEntry();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
  public AddEntry() {
    this.data.forEach((element) => {
      if (element == null) {
        if (this.ordersArray !== undefined) {
          if (
            this.ordersArray.filter((e) => e.ORDER_ID === -1).length > 0
          ) {
            return;
          }
        }
        const record = new Order();
        record.ORDER_ID = -1;
        this.ordersArray.unshift(record);
      } else {
        this.ordersArray.push(element);
      }
    });
  }
  Edit(current: Order) {
    this.subscriptions.push(
      this.proxy.Edit_Order(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre ordre a été enregistré");
          this.closeModal(true);
          if (current.ORDER_ID === -1) {
            this.ordersArray.splice(
              this.ordersArray.indexOf(current),
              1
            );
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_ORDER]&REL_FIELD=ORDER_IMAGE&REL_KEY=" +
              newEntry.CATEGORY_ID;
            this.ordersArray.unshift(newEntry);
          }
        }
      })
    );
  }
  Add_Product_cart(entry) {
    if (entry.My_Product_carts == null) {
    entry.My_Product_carts = [];
    }
    if (entry.My_Product_carts.filter(e => e.PRODUCT_CART_ID === -1).length > 0) {
    return;
    }
    const child = new Product_cart();
    child.PRODUCT_CART_ID = -1;
    child.ORDER_ID = entry.ORDER_ID;
    entry.My_Product_carts.unshift(child);
    }

    Edit_Product_cart(entry: Order, product_cart: Product_cart) {
    this.proxy.Edit_Product_cart(product_cart).subscribe((result) => {
    if (result != null) {
    this.CmSvc.ShowMessage('Done');
    entry.My_Product_Cart.splice(entry.My_Product_Cart.indexOf(product_cart), 1);
    const newEntry: any = result;
    entry.My_Product_Cart.unshift(newEntry);
    }
    });
    }

    Delete_Product_cart(entry: Order, product_cart: Product_cart) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
    if (response) {
    const _params_Delete_Product_cart = new Params_Delete_Product_cart();
    _params_Delete_Product_cart.PRODUCT_CART_ID = product_cart.PRODUCT_CART_ID;
    this.proxy.Delete_Product_cart(_params_Delete_Product_cart).subscribe(data => {
    if (data === "") {
    entry.My_Product_Cart.splice(entry.My_Product_Cart.indexOf(product_cart), 1);
    }
    });
    }
    });
    }
  cancel() {
    this.dialogref.close();
  }
  private closeModal(refreshData: boolean = null) {
    this.dialogref.close(refreshData);
  }


}
