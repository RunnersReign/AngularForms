import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SimpleTemplateFormComponent} from "./simple-template-form.component";


@NgModule({
  imports: [
    CommonModule,

    // Form Dependencies
    FormsModule
  ],
  declarations: [
    SimpleTemplateFormComponent
  ],

})
export class SimpleTemplateFormModule {
}
