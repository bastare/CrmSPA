/** @format */

import { TestBed } from '@angular/core/testing';

import { ChartsGuard } from './charts.guard';

describe('ChartsGuard', () => {
  let guard: ChartsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChartsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
