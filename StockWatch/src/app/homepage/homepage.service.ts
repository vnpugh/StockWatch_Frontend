import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  public subject = new BehaviorSubject('');
  constructor() { }

  updateChild() {
    return this.subject.next('');
  }
}
