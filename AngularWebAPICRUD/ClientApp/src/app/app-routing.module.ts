import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAPICRUDComponent } from './web-apicrud/web-apicrud.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch:'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'webapi', component: WebAPICRUDComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
