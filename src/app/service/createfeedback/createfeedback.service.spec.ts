import { TestBed } from '@angular/core/testing';

import { CreatefeedbackService } from './createfeedback.service';

describe('CreatefeedbackService', () => {
  let service: CreatefeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatefeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
