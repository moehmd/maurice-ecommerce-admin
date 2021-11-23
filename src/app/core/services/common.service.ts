import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CommonService {
  public APIUrl = 'http://localhost:5000/api/Data';
  public ticket = '';
  Is_Logged_In = new BehaviorSubject<boolean>(false);
  UI_Direction = new BehaviorSubject<string>('ltr');
  AZURE_BLOB_IMAGES_CONTAINER =  "";
  constructor(private snackBar: MatSnackBar) { }

  ShowMessage(message: string, d: number = 3250) {
    this.snackBar.open(message, '', {duration: d , panelClass: 'yellow'});
  }

  Handle_Exception(msg) {
    if ((msg != null) && (msg !== '')) {
      this.ShowMessage(msg , 3000);
    }
  }
}
