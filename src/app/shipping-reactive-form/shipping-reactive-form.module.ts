import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {ShippingReactiveFormComponent} from "./shipping-reactive-form.component";


@NgModule({
  imports: [
    CommonModule,

    // Material Dependencies
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,

    // Form Dependencies
    ReactiveFormsModule
  ],
  declarations: [
    ShippingReactiveFormComponent
  ],
  exports: [
    ShippingReactiveFormComponent
  ]
})
export class ShippingReactiveFormModule {
}
