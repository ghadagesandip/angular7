import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../../component/login-dialog/login-dialog.component';
import { SiteService } from '../../site.service';

export interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  respnse: any;
  public user: any;

  constructor(
    public dialog: MatDialog,
    public siteService: SiteService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '500px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.respnse = result;
    });
  }

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }

  }

  logOut(): void {
    this.siteService.logout();
    window.location.reload();
  }


}
