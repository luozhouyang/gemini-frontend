import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AdminComponent} from './admin.component';
import { EditComponent } from './edit/edit.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, AdminComponent, EditComponent, ArticlesComponent]
})
export class AdminModule {
}
