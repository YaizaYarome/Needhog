import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    SideNavListComponent,
    WelcomeMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
