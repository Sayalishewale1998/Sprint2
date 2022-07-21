import { TestBed } from '@angular/core/testing';

import { CompanydService } from './companyd.service';

describe('CompanydService', () => {
  let service: CompanydService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanydService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});