import { HttpClientModule } from '@angular/common/http';
import { SocialMediaComponent } from './social-media/social-media.component';
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesModule } from './articles/articles.module';
import { FieldActionModule } from './field-action/field-action.module';
import { TheLawyerModule } from './the-lawyer/the-lawyer.module';
import { ContactModule } from './contact/contact.module';
import { SocialMediaModule } from './social-media/social-media.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HomeModule,
    ArticlesModule,
    FieldActionModule,
    TheLawyerModule,
    ContactModule,
    SocialMediaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
