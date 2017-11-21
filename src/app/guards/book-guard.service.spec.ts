import { TestBed, inject } from '@angular/core/testing';

import { BookGuardService } from './book-guard.service';

describe('BookGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookGuardService]
    });
  });

  it('should be created', inject([BookGuardService], (service: BookGuardService) => {
    expect(service).toBeTruthy();
  }));
});
