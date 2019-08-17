import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

  constructor(
    private router: Router,
    private adminService: AdminService,
  ) { }

  ngOnInit() {
  }

  public logMeOut() {
    this.adminService.logout();
    this.router.navigate(['/']);
  }

}
