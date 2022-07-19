import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utils} from "../utils/utils";
import {ShippingService} from "../shipping/shipping.service";
import {ShippingContact} from "../shipping/shipping.model";
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {Location} from "@angular/common";

@Component({
  selector: 'app-test',
  templateUrl: './shipping-reactive-form.component.html',
  styleUrls: ['./shipping-reactive-form.component.scss']
})
export class ShippingReactiveFormComponent implements OnInit {
  public states = Utils.STATES;

  public shippingContactId: number | undefined;
  public shippingContact: ShippingContact | undefined;
  public shippingContactForm: FormGroup | undefined;
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
        this.shippingContactForm = this.createFormGroup();
      } else {
        this.shippingService.get(this.shippingContactId).subscribe(shippingContact => {
          this.shippingContact = shippingContact;
          this.shippingContactForm = this.createFormGroup(shippingContact);
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

    const shippingContact: ShippingContact = this.shippingContactForm.value;

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
    if (this.shippingContact) {
      // Reset form only resets to initial values ( not the patched values)
      this.shippingContactForm?.patchValue(this.shippingContact);
    } else {
      this.shippingContactForm?.reset();
    }
  }

  public cancel(): void {
    this.location.back();
  }

  private createFormGroup(existing?: ShippingContact): FormGroup {
    const formGroup = this.fb.group({
      id: undefined,
      company: undefined,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      addressLine1: ['', Validators.required],
      addressLine2: '',
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5}')
        ])
      ],
      shippingType: ['free', Validators.required]
    })

    if (existing) {
      formGroup.patchValue(existing);
    }
    return formGroup;
  }

}
