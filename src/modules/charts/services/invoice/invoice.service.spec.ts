/**
 * /* tslint:disable:no-unused-variable
 *
 * @format
 */

import { TestBed, async, inject } from '@angular/core/testing';
import { InvoiceService } from './invoice.service';

describe('Service: Invoice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoiceService]
    });
  });

  it('should ...', inject([InvoiceService], (service: InvoiceService) => {
    expect(service).toBeTruthy();
  }));
});
