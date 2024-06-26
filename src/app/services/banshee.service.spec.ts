import { TestBed } from '@angular/core/testing';

import { BansheeService } from './banshee.service';

describe('BansheeService', () => {
  let service: BansheeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BansheeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
