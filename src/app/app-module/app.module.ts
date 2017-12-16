import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from '../admin-module/admin.module';
import { LoginRoutingModule } from '../login-module/login-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ResumeComponent } from './resume/resume.component';
import { AdsComponent } from './ads/ads.component';
import { LoginComponent } from '../login-module/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';

import { AboutService } from './about/about.service';
import { BlogsService } from './blogs/blogs.service';
import { ResumeService } from './resume/resume.service';
import { ContactService } from './contact/contact.service';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogsComponent,
    ResumeComponent,
    AdsComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AboutService, BlogsService, ResumeService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

