import { UnitManagementComponent } from './unit-management/unit-management.component';
import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataTableColumn } from '../core/models/data-table-columns';
import { TableActions } from '../core/Models/table-actions';
import { CommonService } from '../core/services/common.service';
import { Params_Get_Unit_By_OWNER_ID, Unit, Proxy, Params_Delete_Unit } from '../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../layout/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit, OnDestroy {

  public tableColumns: DataTableColumn[] = [
    { name: "ENTRY_DATE", display: "Date" },
    { name: "UNIT_NAME", display: "Nom de l'unite" },
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  UnitsArray: Unit[] = [];
  private onRefreshUnits: EventEmitter<any> = new EventEmitter();
  public paramsGetUnits = new Params_Get_Unit_By_OWNER_ID();
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleUnits().subscribe());
    this.refreshUnits();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshUnits() {
    this.onRefreshUnits.emit();
  }

  public handleUnits(): Observable<any> {
    this.paramsGetUnits.OWNER_ID = 1;
    return this.onRefreshUnits.pipe(
      switchMap(() => {
        return this.proxy.Get_Unit_By_OWNER_ID(this.paramsGetUnits);
      }),
      switchMap((Units) => {
        this.setUnits(Units);
        return of(true);
      })
    );
  }

  private setUnits(Units: Unit[]) {
    this.UnitsArray = [].concat(Units);
  }
  Delete(entry: Unit) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Unit = new Params_Delete_Unit();
          _params_Delete_Unit.UNIT_ID = entry.UNIT_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Unit(_params_Delete_Unit)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshUnits();
                  this.UnitsArray.splice(
                    this.UnitsArray.indexOf(entry),
                    1
                  );
                }
              })
          );
        }
      })
    );
  }

  manageUnits(obj: any = null) {
    const dialofRef = this.dialog.open(UnitManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        debugger;
        if (refreshData) {
          this.refreshUnits();
        }
      })
    );
  }

}
