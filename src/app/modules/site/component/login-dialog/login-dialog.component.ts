import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginForm } from './login';
import { SiteService } from '../../site.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public login: LoginForm,
    private siteService: SiteService

    ) { }

    submitted = false;

    onSubmit() {
      this.submitted = true;
      console.log('form submitted', this.login);
      this.siteService.login(this.login).subscribe(
        (data: any) => {
          console.log('login done', data);
        },
        (err) => {
          console.log('error', err);
        }
      );
     }

    onClose(): void {
    this.dialogRef.close();
  }

}
