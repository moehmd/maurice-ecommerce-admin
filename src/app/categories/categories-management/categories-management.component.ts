import { Category, Proxy } from "./../../core/services/proxy.service";
import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonService } from "./../../core/services/common.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-categories-management",
  templateUrl: "./categories-management.component.html",
  styleUrls: ["./categories-management.component.css"],
})
export class CategoriesManagementComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  categoriesArray: Category[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<CategoriesManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.categoriesArray = [];
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
        if (this.categoriesArray !== undefined) {
          if (
            this.categoriesArray.filter((e) => e.CATEGORY_ID === -1).length > 0
          ) {
            return;
          }
        }
        const record = new Category();
        record.CATEGORY_ID = -1;
        this.categoriesArray.unshift(record);
      } else {
        this.categoriesArray.push(element);
      }
    });
  }
  Edit(current: Category) {
    this.subscriptions.push(
      this.proxy.Edit_Category(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre categorie a été enregistrée");
          this.closeModal(true);
          if (current.CATEGORY_ID === -1) {
            this.categoriesArray.splice(
              this.categoriesArray.indexOf(current),
              1
            );
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_CATEGORY]&REL_FIELD=CATEGORY_IMAGE&REL_KEY=" +
              newEntry.CATEGORY_ID;
            this.categoriesArray.unshift(newEntry);
          }
        }
      })
    );
  }
  cancel() {
    this.dialogref.close();
  }
  private closeModal(refreshData: boolean = null) {
    this.dialogref.close(refreshData);
  }
}
