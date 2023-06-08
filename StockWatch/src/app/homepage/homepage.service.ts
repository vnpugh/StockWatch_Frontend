import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

/**
* Using BehaviorSubject observable to handle the message logic (for new subscribers).
* Important because the BehaviorSubject stores the latest value.
*/ 
  public subject = new BehaviorSubject('');
  constructor() { }

  updateChild() { //when called, sends an empty message
    return this.subject.next('');
  }
}
