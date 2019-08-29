import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebAPICRUDComponent } from './web-apicrud/web-apicrud.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WebApicrudDetailComponent } from './web-apicrud-detail/web-apicrud-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch:'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'webapi', component: WebAPICRUDComponent },
  { path: 'webapi/:id', component: WebApicrudDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
