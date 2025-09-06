import { TestBed } from '@angular/core/testing';

import { Uid } from './uid';

describe('Uid', () => {
  let service: Uid;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Uid);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
