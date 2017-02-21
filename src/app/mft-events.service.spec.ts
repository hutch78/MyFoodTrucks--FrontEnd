/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MftEventsService } from './mft-events.service';

describe('MftEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MftEventsService]
    });
  });

  it('should ...', inject([MftEventsService], (service: MftEventsService) => {
    expect(service).toBeTruthy();
  }));
});
