import { TestBed } from '@angular/core/testing';

import { GereServersService } from './gere-servers.service';

describe('GereServersService', () => {
  let service: GereServersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GereServersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
