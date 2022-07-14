import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {SimpleTemplateFormComponent} from "./simple-template-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,

    FormsModule
  ],
  declarations: [
    SimpleTemplateFormComponent
  ],
})
export class SimpleTemplateFormModule {
}
