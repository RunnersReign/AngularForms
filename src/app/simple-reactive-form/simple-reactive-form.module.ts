import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SimpleReactiveFormComponent} from "./simple-reactive-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,

    ReactiveFormsModule
  ],
  declarations: [
    SimpleReactiveFormComponent
  ],
})
export class SimpleReactiveFormModule {
}
