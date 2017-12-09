import {Injectable} from '@angular/core';

@Injectable()
export class WindowReferenceService {

  constructor() {
  }

  getNativeWindow() {

    return window;
  }

}
