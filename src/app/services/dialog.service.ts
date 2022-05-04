import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

import { Observable } from 'rxjs';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private _dialogRef: MatDialogRef<any> | null = null;

  constructor(
    public dialog: MatDialog
  ) {  }

  open(dialog: ComponentType<any>, data: any) {
    this._dialogRef = this.dialog.open(dialog, {
      width: '350px',
      data
    });
  }

  afterClosed(): Observable<any> {
    if (this._dialogRef)
      return this._dialogRef.afterClosed();

    return new Observable();
  }
}
