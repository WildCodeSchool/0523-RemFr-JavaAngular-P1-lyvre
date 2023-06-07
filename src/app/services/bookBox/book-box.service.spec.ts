import { TestBed } from '@angular/core/testing';

import { BookBoxService } from './book-box.service';

describe('BookBoxService', () => {
  let service: BookBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
