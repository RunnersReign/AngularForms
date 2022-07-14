export interface ShippingContact {
  id?: number;
  company?: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  shippingType: string;
}
