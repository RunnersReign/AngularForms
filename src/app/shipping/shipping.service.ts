import {Injectable} from "@angular/core";
import {ShippingContact} from "./shipping.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class ShippingService {

  constructor(private http: HttpClient) {
  }

  public create(shippingContact: ShippingContact): Observable<ShippingContact> {
    console.log('Created New Shipping Contact', shippingContact);
    return this.http.post<ShippingContact>('/api/shippingContacts', shippingContact);
  }

  public update(shippingContact: ShippingContact): Observable<ShippingContact> {
    console.log("Updating Shipping Contact", shippingContact);
    return this.http.put<ShippingContact>('/api/shippingContacts', shippingContact);
  }

  public list(): Observable<ShippingContact[]> {
    return this.http.get<ShippingContact[]>('/api/shippingContacts');
  }

  public get(id: number) {
    return this.http.get<ShippingContact>('/api/shippingContacts/' + id);
  }
}
