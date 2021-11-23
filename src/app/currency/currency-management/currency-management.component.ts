import { Currency , Proxy } from './../../core/services/proxy.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-currency-management',
  templateUrl: './currency-management.component.html',
  styleUrls: ['./currency-management.component.css']
})
export class CurrencyManagementComponent implements OnInit {

  public subscriptions: Subscription[] = [];
  currencyArray: Currency[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<CurrencyManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.currencyArray = [];
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
        if (this.currencyArray !== undefined) {
          if (
            this.currencyArray.filter((e) => e.CURRENCY_ID === -1).length > 0
          ) {
            return;
          }
        }
        const record = new Currency();
        record.CURRENCY_ID = -1;
        this.currencyArray.unshift(record);
      } else {
        this.currencyArray.push(element);
      }
    });
  }
  Edit(current: Currency) {
    this.subscriptions.push(
      this.proxy.Edit_Currency(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre devise a été enregistrée");
          this.closeModal(true);
          if (current.CURRENCY_ID === -1) {
            this.currencyArray.splice(
              this.currencyArray.indexOf(current),
              1
            );
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_CURRENCY]&REL_FIELD=CURRENCY_IMAGE&REL_KEY=" +
              newEntry.CATEGORY_ID;
            this.currencyArray.unshift(newEntry);
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
