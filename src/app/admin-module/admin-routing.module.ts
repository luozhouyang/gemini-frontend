import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuardService} from '../login-module/login/auth-guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditComponent} from './edit/edit.component';
import {ArticlesComponent} from './articles/articles.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActive: [AuthGuardService],
    children: [
      {path: 'articles', component: ArticlesComponent},
      {path: 'edit', component: EditComponent},
      {path: '', component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule {
}
