import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {SimpleTemplateFormModule} from "./simple-template-form/simple-template-form.module";
import {ShippingReactiveFormModule} from "./shipping-reactive-form/shipping-reactive-form.module";
import {ShippingTemplateFormModule} from "./shipping-template-form/shipping-template-form.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {NavBarModule} from "./nav-bar/nav-bar.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SimpleReactiveFormModule} from "./simple-reactive-form/simple-reactive-form.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {ShippingInMemoryService} from "./shipping/shipping-in-memory-service";
import {HttpClientModule} from "@angular/common/http";
import {ShippingListModule} from "./shipping-list/shipping-list.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ShippingInMemoryService),
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,

    // The Components
    NavBarModule,
    LandingPageModule,
    SimpleTemplateFormModule,
    SimpleReactiveFormModule,
    ShippingReactiveFormModule,
    ShippingTemplateFormModule,
    ShippingListModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
