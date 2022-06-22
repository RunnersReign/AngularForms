import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContactTemplateFormComponent} from './contact-template-form/contact-template-form.component';
import {ContactReactiveFormModule} from "./contact-reactive-form/contact-reactive-form.module";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    ContactReactiveFormModule
  ],
  declarations: [
    AppComponent,
    ContactTemplateFormComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
