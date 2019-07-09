import { Component, OnInit } from '@angular/core';
import { Validators,  FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error: {};
  loginError: string;


  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {

    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.submitted = true;
    this.loginService.login(
      {
        email: this.email.value,
        password: this.password.value
      }
    ).subscribe((data) => {
      if (this.loginService.isLoggedIn()) {
        this.router.navigate(['/admin']);
      } else {
        this.loginError = 'Sorry could set session, please try again';
      }
    },
    err => {
      this.loginError = err.errorTitle;
      this.error = err;
    });
  }
}
