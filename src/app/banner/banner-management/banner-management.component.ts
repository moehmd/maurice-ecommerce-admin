import { Component, OnInit, OnDestroy, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileHolder } from 'angular2-image-upload';
import { Subscription } from 'rxjs';
import { CommonService } from 'src/app/core/services/common.service';
import { Banner , Params_Delete_Uploaded_file, Proxy} from 'src/app/core/services/proxy.service';

@Component({
  selector: 'app-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannerManagementComponent implements OnInit , OnDestroy{


  public subscriptions: Subscription[] = [];
  bannersArray: Banner[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialogref: MatDialogRef<BannerManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[]
  ) {}

  ngOnInit(): void {
    this.bannersArray = [];
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
        if (this.bannersArray !== undefined) {
          if (
            this.bannersArray.filter((e) => e.BANNER_ID === -1).length > 0
          ) {
            return;
          }
        }
        const record = new Banner();
        record.BANNER_ID = -1;
        this.bannersArray.unshift(record);
      } else {
        this.bannersArray.push(element);
      }
    });
  }
  Edit(current: Banner) {
    this.subscriptions.push(
      this.proxy.Edit_Banner(current).subscribe((result) => {
        if (result != null) {
          this.CmSvc.ShowMessage("Votre banniere a été enregistrée");
          this.closeModal(true);
          if (current.BANNER_ID === -1) {
            this.bannersArray.splice(
              this.bannersArray.indexOf(current),
              1
            );
            const newEntry: any = result;
            newEntry.MyUploadedImages = [];
            newEntry.MyURL =
              this.CmSvc.APIUrl +
              "/Upload_Image?REL_ENTITY=[TBL_BANNER]&REL_FIELD=BANNER_IMAGE&REL_KEY=" +
              newEntry.CATEGORY_ID;
            this.bannersArray.unshift(newEntry);
          }
        }
      })
    );
  }
  imageFinishedUploading(file: FileHolder) {
    const body = file.serverResponse['_body'];
    const data = JSON.parse(body);
    const filename = data;
    file.src = this.CmSvc.APIUrl.replace('api/Data/', 'Files/Uploaded/') + '' + filename;
    }

    onRemoved(file: FileHolder) {
    const str_filname = file.src.substr(file.src.lastIndexOf('/') + 1);
    const UPLOADED_FILE_ID = str_filname.split('.')[0];

    const p: Params_Delete_Uploaded_file = new Params_Delete_Uploaded_file();
    p.UPLOADED_FILE_ID = +UPLOADED_FILE_ID;
    this.proxy.Delete_Uploaded_file(p).subscribe(() => {
    this.CmSvc.ShowMessage('Deleted Successfully', 2000);
    });
    }

    onUploadStateChanged(state: boolean) {}
  cancel() {
    this.dialogref.close();
  }
  private closeModal(refreshData: boolean = null) {
    this.dialogref.close(refreshData);
  }

}
