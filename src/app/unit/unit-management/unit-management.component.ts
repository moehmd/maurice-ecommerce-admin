import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/core/services/common.service";
import { Unit, Proxy } from "src/app/core/services/proxy.service";

@Component({
  selector: "app-unit-management",
  templateUrl: "./unit-management.component.html",
  styleUrls: ["./unit-management.component.css"],
})
export class UnitManagementComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  unitsArray: Unit[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<UnitManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.unitsArray = [];
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
        if (this.unitsArray !== undefined) {
          if (this.unitsArray.filter((e) => e.UNIT_ID === -1).length > 0) {
            return;
          }
        }
        const record = new Unit();
        record.UNIT_ID = -1;
        this.unitsArray.unshift(record);
      } else {
        this.unitsArray.push(element);
      }
    });
  }
  Edit(current: Unit) {
    this.subscriptions.push(
      this.proxy.Edit_Unit(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre unité de quantité a été enregistrée");
          this.closeModal(true);
          if (current.UNIT_ID === -1) {
            this.unitsArray.splice(this.unitsArray.indexOf(current), 1);
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_UNIT]&REL_FIELD=UNIT_IMAGE&REL_KEY=" +
              newEntry.UNIT_ID;
            this.unitsArray.unshift(newEntry);
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
