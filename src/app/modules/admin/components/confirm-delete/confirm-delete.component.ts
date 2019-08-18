import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AdminService } from '../../shared/admin.service';

export interface DialogData {
  _id: string;
  path: string;
}
@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public adminService: AdminService
  ) { }

  cancelDelete(): void {
    this.dialogRef.close();
  }

  proceedDelete(): void {
    this.adminService.deleteRecord(this.data._id, this.data.path).subscribe(
      (resp: any) => {
        this.dialogRef.close();
        return resp;
      },
      (err) => {
        console.log('error', err);
      }
    );
  }
}
