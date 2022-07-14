import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShippingTemplateFormComponent} from "./shipping-template-form/shipping-template-form.component";
import {ShippingReactiveFormComponent} from "./shipping-reactive-form/shipping-reactive-form.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SimpleTemplateFormComponent} from "./simple-template-form/simple-template-form.component";
import {SimpleReactiveFormComponent} from "./simple-reactive-form/simple-reactive-form.component";
import {ShippingListComponent} from "./shipping-list/shipping-list.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'simple-template-form', component: SimpleTemplateFormComponent},
  {path: 'simple-reactive-form', component: SimpleReactiveFormComponent},
  {path: 'contact-reactive-form', component: ShippingReactiveFormComponent},
  {path: 'contact-reactive-form/:id', component: ShippingReactiveFormComponent},
  {path: 'contact-template-form', component: ShippingTemplateFormComponent},
  {path: 'contact-template-form/:id', component: ShippingTemplateFormComponent},
  {path: 'shipping-contacts', component: ShippingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
