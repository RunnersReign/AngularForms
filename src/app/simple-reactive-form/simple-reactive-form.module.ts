import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {SimpleReactiveFormComponent} from "./simple-reactive-form.component";


@NgModule({
  imports: [
    CommonModule,

    ReactiveFormsModule
  ],
  declarations: [
    SimpleReactiveFormComponent
  ],
})
export class SimpleReactiveFormModule {
}
