import { TestBed } from '@angular/core/testing';

import { UpdatefeedbackService } from './updatefeedback.service';

describe('UpdatefeedbackService', () => {
  let service: UpdatefeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatefeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
