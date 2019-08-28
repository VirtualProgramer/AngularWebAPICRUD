import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAPICRUDComponent } from './web-apicrud/web-apicrud.component';
import { WelcomeComponent } from './welcome/welcome.component';

// CRUD前置 //
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// CRUD前置 //

@NgModule({
  declarations: [
    AppComponent,
    WebAPICRUDComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
