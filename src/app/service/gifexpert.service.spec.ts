import { TestBed } from '@angular/core/testing';

import { GifexpertService } from './gifexpert.service';

describe('GifexpertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GifexpertService = TestBed.get(GifexpertService);
    expect(service).toBeTruthy();
  });
});
