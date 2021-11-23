import { Admin, Proxy } from "./../../core/services/proxy.service";
import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { Subscription } from "rxjs";
import { CommonService } from "src/app/core/services/common.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-admins-management",
  templateUrl: "./admins-management.component.html",
  styleUrls: ["./admins-management.component.css"],
})
export class AdminsManagementComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  adminArray: Admin[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<AdminsManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.adminArray = [];
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
        if (this.adminArray !== undefined) {
          if (this.adminArray.filter((e) => e.ADMIN_ID === -1).length > 0) {
            return;
          }
        }
        const record = new Admin();
        record.ADMIN_ID = -1;
        this.adminArray.unshift(record);
      } else {
        this.adminArray.push(element);
      }
    });
  }
  Edit(current: Admin) {
    this.subscriptions.push(
      this.proxy.Edit_Admin(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre admin a été enregistré");
          this.closeModal(true);
          if (current.ADMIN_ID === -1) {
            this.adminArray.splice(this.adminArray.indexOf(current), 1);
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_ADMIN]&REL_FIELD=ADMIN_IMAGE&REL_KEY=" +
              newEntry.UNIT_ID;
            this.adminArray.unshift(newEntry);
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
