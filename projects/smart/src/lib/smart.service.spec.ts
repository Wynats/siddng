import { TestBed } from '@angular/core/testing';

import { SmartService } from './smart.service';

describe('SmartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartService = TestBed.get(SmartService);
    expect(service).toBeTruthy();
  });
});
