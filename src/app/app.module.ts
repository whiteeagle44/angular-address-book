import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ContactEditComponent } from './layouts/contact-edit/contact-edit.component';

@NgModule({
  declarations: [AppComponent, ContactEditComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
