import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShippingListComponent} from "./shipping-list.component";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  declarations: [
    ShippingListComponent
  ]
})
export class ShippingListModule {
}
