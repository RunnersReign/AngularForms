import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {SimpleTemplateFormModule} from "./simple-template-form/simple-template-form.module";
import {ContactReactiveFormModule} from "./contact-reactive-form/contact-reactive-form.module";
import {ContactTemplateFormModule} from "./contact-template-form/contact-template-form.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SimpleReactiveFormModule} from "./simple-reactive-form/simple-reactive-form.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,

    // The Components
    NavBarModule,
    LandingPageModule,
    SimpleTemplateFormModule,
    SimpleReactiveFormModule,
    ContactReactiveFormModule,
    ContactTemplateFormModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
