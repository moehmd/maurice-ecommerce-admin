import { BannerManagementComponent } from "./banner-management/banner-management.component";
import {
  Banner,
  Params_Get_Banner_By_OWNER_ID,
  Proxy,
  Params_Delete_Banner,
} from "./../core/services/proxy.service";
import { Component, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import { Observable, of, Subscription } from "rxjs";
import { DataTableColumn } from "../core/models/data-table-columns";
import { TableActions } from "../core/Models/table-actions";
import { MatDialog } from "@angular/material/dialog";
import { switchMap } from "rxjs/operators";
import { DeleteConfirmationComponent } from "../layout/delete-confirmation/delete-confirmation.component";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
})
export class BannerComponent implements OnInit, OnDestroy {
  public tableColumns: DataTableColumn[] = [
    {name:"ENTRY_DATE", display:"Date"},
    { name: "TITLE", display: "Titre" },
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  bannerArray: Banner[] = [];
  private onRefreshBanners: EventEmitter<any> = new EventEmitter();
  public paramsGetBanners = new Params_Get_Banner_By_OWNER_ID();
  constructor(private proxy: Proxy, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleBanners().subscribe());
    this.refreshBanners();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshBanners() {
    this.onRefreshBanners.emit();
  }

  public handleBanners(): Observable<any> {
    this.paramsGetBanners.OWNER_ID = 1;
    return this.onRefreshBanners.pipe(
      switchMap(() => {
        return this.proxy.Get_Banner_By_OWNER_ID(this.paramsGetBanners);
      }),
      switchMap((Banners) => {
        this.setBanners(Banners);
        return of(true);
      })
    );
  }

  private setBanners(Banners: Banner[]) {
    this.bannerArray = [].concat(Banners);
  }
  Delete(entry: Banner) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Banner = new Params_Delete_Banner();
          _params_Delete_Banner.BANNER_ID = entry.BANNER_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Banner(_params_Delete_Banner)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshBanners();
                  this.bannerArray.splice(this.bannerArray.indexOf(entry), 1);
                }
              })
          );
        }
      })
    );
  }

  manageBanners(obj: any = null) {
    const dialofRef = this.dialog.open(BannerManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        if (refreshData) {
          this.refreshBanners();
        }
      })
    );
  }
}
