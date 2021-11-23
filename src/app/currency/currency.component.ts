import { Currency, Params_Get_Currency_By_OWNER_ID, Proxy, Params_Delete_Currency } from './../core/services/proxy.service';
import { Component, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { DataTableColumn } from '../core/models/data-table-columns';
import { TableActions } from '../core/Models/table-actions';
import { CommonService } from '../core/services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { DeleteConfirmationComponent } from '../layout/delete-confirmation/delete-confirmation.component';
import { CurrencyManagementComponent } from './currency-management/currency-management.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit , OnDestroy {
  public tableColumns: DataTableColumn[] = [
    { name: "NAME", display: "Nom" },
    { name: "SYMBOL", display: "Symbole" },
    { name: "actions", display: "Actions" },
  ];
  public tableActions: TableActions[] = [
    TableActions.edit,
    TableActions.delete,
  ];
  public subscriptions: Subscription[] = [];
  currencyArray: Currency[] = [];
  private onRefreshCurrency: EventEmitter<any> = new EventEmitter();
  public paramsGetCurrency = new Params_Get_Currency_By_OWNER_ID();
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(this.handleCurrency().subscribe());
    this.refreshCurrency();
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }

  public refreshCurrency() {
    this.onRefreshCurrency.emit();
  }

  public handleCurrency(): Observable<any> {
    this.paramsGetCurrency.OWNER_ID = 1;
    return this.onRefreshCurrency.pipe(
      switchMap(() => {
        return this.proxy.Get_Currency_By_OWNER_ID(this.paramsGetCurrency);
      }),
      switchMap((Currency) => {
        this.setCurrency(Currency);
        return of(true);
      })
    );
  }

  private setCurrency(Currency: Currency[]) {
    this.currencyArray = [].concat(Currency);
  }
  Delete(entry: Currency) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    this.subscriptions.push(
      dialogRef.afterClosed().subscribe((response) => {
        if (response) {
          const _params_Delete_Currency = new Params_Delete_Currency();
          _params_Delete_Currency.CURRENCY_ID = entry.CURRENCY_ID;
          this.subscriptions.push(
            this.proxy
              .Delete_Currency(_params_Delete_Currency)
              .subscribe((data) => {
                if (data === "") {
                  this.refreshCurrency();
                  this.currencyArray.splice(
                    this.currencyArray.indexOf(entry),
                    1
                  );
                }
              })
          );
        }
      })
    );
  }

  manageCurrency(obj: any = null) {
    const dialofRef = this.dialog.open(CurrencyManagementComponent, {
      width: "700px",
      data: [obj],
    });
    this.subscriptions.push(
      dialofRef.afterClosed().subscribe((refreshData) => {
        if (refreshData) {
          this.refreshCurrency();
        }
      })
    );
  }

}
