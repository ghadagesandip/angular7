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
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.loginService.logout();
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
      console.log('data', data)
      if (this.loginService.isLoggedIn()) {
        alert('login success');
      } else {
        alert('Username or password is incorrect.');
      }
    },
    err => {
      console.log('err', err)
      this.error = err;
    });
  }
}
