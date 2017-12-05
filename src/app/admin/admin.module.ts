import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, LoginComponent, AdminComponent]
})
export class AdminModule { }
