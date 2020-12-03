import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { MinionsComponent } from './components/minions/minions.component';
import { MountsComponent } from './components/mounts/mounts.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = ([] = [
  { path: '', component: WelcomeComponent },
  { path: 'mounts', component: MountsComponent },
  { path: 'minions', component: MinionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'welcome', component: WelcomeComponent },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
