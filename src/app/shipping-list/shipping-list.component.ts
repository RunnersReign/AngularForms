import {Component, OnInit, ViewChild} from '@angular/core';
import {ShippingService} from "../shipping/shipping.service";
import {ShippingContact} from "../shipping/shipping.model";
import {finalize} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-shipping-list',
  templateUrl: './shipping-list.component.html',
  styleUrls: ['./shipping-list.component.scss']
})
export class ShippingListComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'company', 'firstName', 'lastName', 'buttons'];
  public shippingContactsDatasource = new MatTableDataSource<ShippingContact>([]);
  public isLoading = false;

  @ViewChild(MatPaginator)
  private paginator: MatPaginator | undefined;
  @ViewChild(MatSort)
  private sort: MatSort | undefined;

  constructor(private shippingService: ShippingService) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.shippingService.list()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(shippingContacts => {
        this.shippingContactsDatasource.data = shippingContacts;
        if (this.paginator) {
          this.shippingContactsDatasource.paginator = this.paginator;
        }
        if (this.sort) {
          this.shippingContactsDatasource.sort = this.sort;
        }
      });
  }
}
