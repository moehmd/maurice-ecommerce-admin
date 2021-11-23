import {
  Params_Delete_Category,
  Params_Get_Category_By_OWNER_ID,
} from "./../core/services/proxy.service";
import { Component, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable, of, Subscription } from "rxjs";
import { DataTableColumn } from "../core/models/data-table-columns";
import { TableActions } from "../core/Models/table-actions";
import { CommonService } from "../core/services/common.service";
import { Category, Proxy } from "../core/services/proxy.service";
import { switchMap } from "rxjs/operators";
import { DeleteConfirmationComponent } from "../layout/delete-confirmation/delete-confirmation.component";
import { CategoriesManagementComponent } from "./categories-management/categories-management.component";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.css"],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public tableColumns: DataTableColumn[] = [
    { name: "NAME", display: "Nom" },
    { name: "DESCRIPTION", display: "Description" },
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  categoriesArray: Category[] = [];
  private onRefreshCategories: EventEmitter<any> = new EventEmitter();
  public paramsGetCategories = new Params_Get_Category_By_OWNER_ID();
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleCategories().subscribe());
    this.refreshCategories();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshCategories() {
    this.onRefreshCategories.emit();
  }

  public handleCategories(): Observable<any> {
    this.paramsGetCategories.OWNER_ID = 1;
    return this.onRefreshCategories.pipe(
      switchMap(() => {
        return this.proxy.Get_Category_By_OWNER_ID(this.paramsGetCategories);
      }),
      switchMap((Categories) => {
        debugger;
        this.setCategories(Categories);
        return of(true);
      })
    );
  }

  private setCategories(Categories: Category[]) {
    this.categoriesArray = [].concat(Categories);
  }
  Delete(entry: Category) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Categories = new Params_Delete_Category();
          _params_Delete_Categories.CATEGORY_ID = entry.CATEGORY_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Category(_params_Delete_Categories)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshCategories();
                  this.categoriesArray.splice(
                    this.categoriesArray.indexOf(entry),
                    1
                  );
                }
              })
          );
        }
      })
    );
  }

  manageCategories(obj: any = null) {
    const dialofRef = this.dialog.open(CategoriesManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        debugger;
        if (refreshData) {
          this.refreshCategories();
        }
      })
    );
  }
}
