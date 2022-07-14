import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ShippingTemplateFormComponent} from "./shipping-template-form.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";


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

    // Form Dependency
    FormsModule
  ],
  declarations: [
    ShippingTemplateFormComponent
  ],
})
export class ShippingTemplateFormModule {
}
