import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {AdsComponent} from './ads/ads.component';
import {ContactComponent} from './contact/contact.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {AuthGuardService} from '../login-module/login/auth-guard.service';
import {CanDeactivateGuard} from '../login-module/login/can-deactive-guard.service';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin-module/admin.module#AdminModule',
    canLoad: [AuthGuardService]
  },
  {path: 'blogs', component: BlogsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'ads', component: AdsComponent},
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard
  ]
})
export class RoutingModule {
}
