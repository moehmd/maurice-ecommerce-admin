import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { FileHolder } from "angular2-image-upload";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/core/services/common.service";
import {
  Category,
  Color,
  Currency,
  Params_Delete_Color,
  Params_Delete_Size,
  Params_Delete_Uploaded_file,
  Params_Get_Category_By_OWNER_ID,
  Params_Get_Unit_By_OWNER_ID,
  Product,
  Proxy,
  Size,
  Unit,
} from "src/app/core/services/proxy.service";
import { DeleteConfirmationComponent } from "src/app/layout/delete-confirmation/delete-confirmation.component";

@Component({
  selector: "app-product-management",
  templateUrl: "./product-management.component.html",
  styleUrls: ["./product-management.component.css"],
})
export class ProductManagementComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  productsArray: Product[] = [];
  CategoryList: Category[];
  _params_Get_Category_By_OWNER_ID = new Params_Get_Category_By_OWNER_ID();
  UnitList: Unit[];
  _params_Get_Unit_By_OWNER_ID = new Params_Get_Unit_By_OWNER_ID();

  CurrencyList: Currency[];
  _params_Get_Currency_By_OWNER_ID = new Params_Get_Category_By_OWNER_ID();
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<ProductManagementComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.productsArray = [];
    this._params_Get_Category_By_OWNER_ID.OWNER_ID = 1;
    this.subscriptions.push(
      this.proxy
        .Get_Category_By_OWNER_ID(this._params_Get_Category_By_OWNER_ID)
        .subscribe((result) => (this.CategoryList = result))
    );

    this._params_Get_Unit_By_OWNER_ID.OWNER_ID = 1;
    this.subscriptions.push(
      this.proxy
        .Get_Unit_By_OWNER_ID(this._params_Get_Unit_By_OWNER_ID)
        .subscribe((result) => (this.UnitList = result))
    );

    this._params_Get_Currency_By_OWNER_ID.OWNER_ID = 1;
    this.subscriptions.push(
      this.proxy
        .Get_Currency_By_OWNER_ID(this._params_Get_Currency_By_OWNER_ID)
        .subscribe((result) => (this.CurrencyList = result))
    );

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
        if (this.productsArray !== undefined) {
          if (
            this.productsArray.filter((e) => e.PRODUCT_ID === -1).length > 0
          ) {
            return;
          }
        }
        const record = new Product();
        record.PRODUCT_ID = -1;
        this.productsArray.unshift(record);
      } else {
        this.productsArray.push(element);
      }
    });
  }
  public Edit(current: Product) {
    this.subscriptions.push(
      this.proxy.Edit_Product(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre produit a été enregistrée");
          this.closeModal(true);
          if (current.PRODUCT_ID === -1) {
            this.productsArray.splice(this.productsArray.indexOf(current), 1);
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_PRODUCT]&REL_FIELD=PRODUCT_IMAGE&REL_KEY=" +
              newEntry.CATEGORY_ID;
            this.productsArray.unshift(newEntry);
          }
        }
      })
    );
  }
  public imageFinishedUploading(file: FileHolder) {
    const body = file.serverResponse["_body"];
    const data = JSON.parse(body);
    const filename = data;
    file.src =
      this.CmSvc.APIUrl.replace("api/Data/", "Files/Uploaded/") + "" + filename;
  }

  public onRemoved(file: FileHolder) {
    const str_filname = file.src.substr(file.src.lastIndexOf("/") + 1);
    const UPLOADED_FILE_ID = str_filname.split(".")[0];

    const p: Params_Delete_Uploaded_file = new Params_Delete_Uploaded_file();
    p.UPLOADED_FILE_ID = +UPLOADED_FILE_ID;
    this.proxy.Delete_Uploaded_file(p).subscribe(() => {
      this.CmSvc.ShowMessage("Deleted Successfully", 2000);
    });
  }

  public onUploadStateChanged(state: boolean) {}
  public cancel() {
    this.dialogref.close();
  }
  private closeModal(refreshData: boolean = null) {
    this.dialogref.close(refreshData);
  }
  public Add_Color(entry) {
    if (entry.My_Color == null) {
      entry.My_Color = [];
    }
    if (entry.My_Color.filter((e) => e.COLOR_ID === -1).length > 0) {
      return;
    }
    const child = new Color();
    child.COLOR_ID = -1;
    child.PRODUCT_ID = entry.PRODUCT_ID;
    entry.My_Color.unshift(child);
  }

  public Edit_Color(entry: Product, color: Color) {
    this.proxy.Edit_Color(color).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage("Done");
        entry.My_Color.splice(entry.My_Color.indexOf(color), 1);
        const newEntry: any = result;
        entry.My_Color.unshift(newEntry);
      }
    });
  }

  public Delete_Color(entry: Product, color: Color) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        const _params_Delete_Color = new Params_Delete_Color();
        _params_Delete_Color.COLOR_ID = color.COLOR_ID;
        this.proxy.Delete_Color(_params_Delete_Color).subscribe((data) => {
          if (data === "") {
            entry.My_Color.splice(entry.My_Color.indexOf(color), 1);
          }
        });
      }
    });
  }

  public Add_Size(entry) {
    if (entry.My_Size == null) {
      entry.My_Size = [];
    }
    if (entry.My_Size.filter((e) => e.SIZE_ID === -1).length > 0) {
      return;
    }
    const child = new Size();
    child.SIZE_ID = -1;
    child.PRODUCT_ID = entry.PRODUCT_ID;
    entry.My_Size.unshift(child);
  }

  public Edit_Size(entry: Product, size: Size) {
    this.proxy.Edit_Size(size).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage("Done");
        entry.My_Size.splice(entry.My_Size.indexOf(size), 1);
        const newEntry: any = result;
        entry.My_Size.unshift(newEntry);
      }
    });
  }

  public Delete_Size(entry: Product, size: Size) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        const _params_Delete_Size = new Params_Delete_Size();
        _params_Delete_Size.SIZE_ID = size.SIZE_ID;
        this.proxy.Delete_Size(_params_Delete_Size).subscribe((data) => {
          if (data === "") {
            entry.My_Size.splice(entry.My_Size.indexOf(size), 1);
          }
        });
      }
    });
  }
}
