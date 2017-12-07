import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {AboutComponent} from './about/about.component';
import {ResumeComponent} from './resume/resume.component';
import {AdsComponent} from './ads/ads.component';
import {ContactComponent} from './contact/contact.component';


const routes: Routes = [
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: 'blogs', component: BlogsComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'ads', component: AdsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}
