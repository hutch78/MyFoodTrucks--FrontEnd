import { Injectable } from '@angular/core';
import { MFT_EVENTS } from './mocks/mocks';

@Injectable()
export class MftEventsService {

  constructor() { }

  getMftEvents() {
    return MFT_EVENTS;
  }

}
