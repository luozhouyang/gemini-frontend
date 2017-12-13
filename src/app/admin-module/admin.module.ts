import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { EditComponent } from './edit/edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, AdminComponent, EditComponent, ArticlesComponent, ArticleDetailComponent, AdminHeaderComponent]
})
export class AdminModule {
}
