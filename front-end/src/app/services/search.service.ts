import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private message = new BehaviorSubject('');
  sharedMessage = this.message.asObservable();

  constructor() { }
  
}
