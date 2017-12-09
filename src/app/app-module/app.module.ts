import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BlogsComponent} from './blogs/blogs.component';
import {ResumeComponent} from './resume/resume.component';
import {AdsComponent} from './ads/ads.component';
import {LoginComponent} from '../login-module/login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutService} from './about/about.service';
import {BlogsService} from './blogs/blogs.service';
import {ResumeService} from './resume/resume.service';
import {AppRoutingModule} from './app-routing.module';
import {ContactComponent} from './contact/contact.component';
import {ContactService} from './contact/contact.service';
import {Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogsComponent,
    ResumeComponent,
    AdsComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [AboutService, BlogsService, ResumeService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

