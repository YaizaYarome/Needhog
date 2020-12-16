import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';
import { WelcomeMessageComponent } from './components/welcome-message/welcome-message.component';
import { MountsComponent } from './components/mounts/mounts.component';
import { MinionsComponent } from './components/minions/minions.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MountCardComponent } from './components/mount-card/mount-card.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MinionCardComponent } from './components/minion-card/minion-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ContactFormDialogComponent } from './components/contact-form-dialog/contact-form-dialog.component';
import { FormTermsDialogComponent } from './components/form-terms-dialog/form-terms-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    SideNavListComponent,
    WelcomeMessageComponent,
    MountsComponent,
    MinionsComponent,
    ContactComponent,
    WelcomeComponent,
    MountCardComponent,
    FiltersComponent,
    ContactFormComponent,
    MinionCardComponent,
    ContactFormDialogComponent,
    FormTermsDialogComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    InfiniteScrollModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
