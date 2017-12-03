import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {MatIconModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {BlogsComponent} from './blogs/blogs.component';
import {ResumeComponent} from './resume/resume.component';
import {AdsComponent} from './ads/ads.component';
import {AboutService} from './about/about.service';
import {BlogsService} from './blogs/blogs.service';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BlogsComponent,
    ResumeComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    RoutingModule,
  ],
  providers: [AboutService, BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

