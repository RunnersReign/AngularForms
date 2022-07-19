import {Component, OnInit, ViewChild} from '@angular/core';
import {Utils} from "../utils/utils";
import {ShippingContact} from "../shipping/shipping.model";
import {FormBuilder, NgForm} from "@angular/forms";
import {ShippingService} from "../shipping/shipping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Observable} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './shipping-template-form.component.html',
  styleUrls: ['./shipping-template-form.component.scss']
})
export class ShippingTemplateFormComponent implements OnInit {
  public states = Utils.STATES;

  @ViewChild(NgForm)
  public shippingContactForm: NgForm | undefined;

  public shippingContactId: number | undefined;
  public shippingContact: ShippingContact | undefined;
  public shippingContactViewModel: ShippingContact | undefined;
  public hasUnitNumber = false;

  constructor(private fb: FormBuilder,
              private shippingService: ShippingService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.shippingContactId = params['id'];
      if (!this.shippingContactId) {
        this.shippingContactViewModel = this.getShippingContactViewModel();
      } else {
        this.shippingService.get(this.shippingContactId).subscribe(shippingContact => {
          this.shippingContact = shippingContact;
          this.shippingContactViewModel = this.getShippingContactViewModel(shippingContact);
          this.hasUnitNumber = !!shippingContact.addressLine2;
        })
      }
    });
  }

  public onSubmit(): void {
    if (!this.shippingContactForm?.valid) {
      // if not valid do not perform submit.
      return;
    }

    if (!this.shippingContactViewModel) {
      return
    }

    const shippingContact: ShippingContact = this.shippingContactViewModel;

    let result: Observable<ShippingContact>;
    if (shippingContact.id) {
      result = this.shippingService.update(shippingContact);
    } else {
      result = this.shippingService.create(shippingContact);
    }

    result.subscribe({
      complete: () => {
        this.router.navigate(['/shipping-contacts']);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }

  public resetForm(): void {
    this.shippingContactViewModel = this.getShippingContactViewModel(this.shippingContact);
  }

  public cancel(): void {
    this.location.back();
  }

  private getShippingContactViewModel(existing?: ShippingContact): ShippingContact {
    if (existing) {
      return Utils.deepClone(existing);
    }
    return {
      firstName: '',
      lastName: '',
      addressLine1: '',
      city: '',
      state: '',
      postalCode: '',
      shippingType: 'free'
    };
  }
}
