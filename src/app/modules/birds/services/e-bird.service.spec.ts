import { TestBed } from '@angular/core/testing';

import { EBirdService } from './e-bird.service';

describe('EBirdService', () => {
  let service: EBirdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EBirdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
