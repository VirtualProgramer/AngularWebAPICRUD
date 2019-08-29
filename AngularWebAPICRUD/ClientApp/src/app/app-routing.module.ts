import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebAPICRUDComponent } from './web-apicrud/web-apicrud.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WebApicrudDetailComponent } from './web-apicrud-detail/web-apicrud-detail.component';
import { WebApicrudDetailEditComponent } from './web-apicrud-detail-edit/web-apicrud-detail-edit.component';
import { WebApicrudAddComponent } from './web-apicrud-add/web-apicrud-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch:'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'webapi', component: WebAPICRUDComponent },
  { path: 'webapi/add', component: WebApicrudAddComponent },
  { path: 'webapi/:id', component: WebApicrudDetailComponent },
  { path: 'webapi/:id/edit', component: WebApicrudDetailEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
