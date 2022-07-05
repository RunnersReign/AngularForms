import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactTemplateFormComponent} from "./contact-template-form/contact-template-form.component";
import {ContactReactiveFormComponent} from "./contact-reactive-form/contact-reactive-form.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {SimpleTemplateFormComponent} from "./simple-template-form/simple-template-form.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'simple-template-form', component: SimpleTemplateFormComponent},
  {path: 'contact-reactive-form', component: ContactReactiveFormComponent},
  {path: 'contact-template-form', component: ContactTemplateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
