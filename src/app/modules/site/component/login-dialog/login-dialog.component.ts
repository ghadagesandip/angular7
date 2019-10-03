import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginForm } from './login';
import { SiteService } from '../../site.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public login: LoginForm,
    private siteService: SiteService,
    private router: Router

    ) {     }

    submitted = false;
    public loginError;

    onSubmit() {
      this.submitted = true;
      this.siteService.login(this.login).subscribe(
        (resp: any) => {
          this.siteService.setUser(resp.data);
          if (resp && resp.data && resp.data.user.userRole === 'admin') {
            this.onClose();
            return this.router.navigate(['/admin/customer']);
          }
          this.onClose();
          window.location.reload();
        },
        (err) => {
          console.log('error', err);
          this.loginError = err.error.message;
        }
      );
     }

    onClose(): void {
    this.dialogRef.close();
  }

}
