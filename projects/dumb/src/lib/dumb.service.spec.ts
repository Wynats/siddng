import { TestBed } from '@angular/core/testing';

import { DumbService } from './dumb.service';

describe('DumbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DumbService = TestBed.get(DumbService);
    expect(service).toBeTruthy();
  });
});
