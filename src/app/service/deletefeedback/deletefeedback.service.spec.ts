import { TestBed } from '@angular/core/testing';

import { DeletefeedbackService } from './deletefeedback.service';

describe('DeletefeedbackService', () => {
  let service: DeletefeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletefeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
