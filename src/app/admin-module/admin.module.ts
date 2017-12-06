import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, AdminComponent]
})
export class AdminModule {
}
