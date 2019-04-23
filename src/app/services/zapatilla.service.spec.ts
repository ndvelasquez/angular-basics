import { TestBed } from '@angular/core/testing';

import { ZapatillaService } from './zapatilla.service';

describe('ZapatillaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZapatillaService = TestBed.get(ZapatillaService);
    expect(service).toBeTruthy();
  });
});
