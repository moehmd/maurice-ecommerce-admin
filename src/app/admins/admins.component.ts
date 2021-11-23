import { AdminsManagementComponent } from "./admins-management/admins-management.component";
import {
  Params_Delete_Admin,
  Params_Get_Admin_By_OWNER_ID,
  Proxy,
} from "./../core/services/proxy.service";
import { Component, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { DataTableColumn } from "../core/models/data-table-columns";
import { TableActions } from "../core/Models/table-actions";
import { Admin } from "../core/services/proxy.service";
import { MatDialog } from "@angular/material/dialog";
import { switchMap } from "rxjs/operators";
import { DeleteConfirmationComponent } from "../layout/delete-confirmation/delete-confirmation.component";

@Component({
  selector: "app-admins",
  templateUrl: "./admins.component.html",
  styleUrls: ["./admins.component.css"],
})
export class AdminsComponent implements OnInit, OnDestroy {
  public tableColumns: DataTableColumn[] = [
    { name: "ENTRY_DATE", display: "Date" },
    { name: "FULLNAME", display: "Nom complet" },
    { name: "EMAIL", display: "E-mail" },
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  adminsArray: Admin[] = [];
  private onRefreshAdmins: EventEmitter<any> = new EventEmitter();
  public paramsGetAdmins = new Params_Get_Admin_By_OWNER_ID();
  constructor(private proxy: Proxy, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleAdmins().subscribe());
    this.refreshAdmins();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshAdmins() {
    this.onRefreshAdmins.emit();
  }

  public handleAdmins(): Observable<any> {
    this.paramsGetAdmins.OWNER_ID = 1;
    return this.onRefreshAdmins.pipe(
      switchMap(() => {
        return this.proxy.Get_Admin_By_OWNER_ID(this.paramsGetAdmins);
      }),
      switchMap((Admin) => {
        this.setAdmin(Admin);
        return of(true);
      })
    );
  }

  private setAdmin(Admin: Admin[]) {
    this.adminsArray = [].concat(Admin);
  }
  Delete(entry: Admin) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Admin = new Params_Delete_Admin();
          _params_Delete_Admin.ADMIN_ID = entry.ADMIN_ID;
          this.subscriptions.push(
            this.proxy.Delete_Admin(_params_Delete_Admin).subscribe((data) => {
              if (data === "") {
                this.refreshAdmins();
                this.adminsArray.splice(this.adminsArray.indexOf(entry), 1);
              }
            })
          );
        }
      })
    );
  }

  manageAdmins(obj: any = null) {
    const dialofRef = this.dialog.open(AdminsManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        if (refreshData) {
          this.refreshAdmins();
        }
      })
    );
  }
}
