/** @format */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { InvoiceData } from '../../models/invoice.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  readonly baseUrl: string = environment.apiUrl + 'invoice/';

  constructor(private _http: HttpClient) {}

  getData$(): Observable<InvoiceData[]> {
    debugger;
    return this._http
      .get<InvoiceData[]>(this.baseUrl + 'GetInvoiceData')
      .pipe(
        map(result =>
          result
            .filter(element => (element.Date ? true : false))
            .sort((a, b) => new Date(a.Date).getTime() - new Date(b.Date).getTime())
        )
      );
  }
}
