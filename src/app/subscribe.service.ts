import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscribeService {

  constructor(private httpClient: HttpClient) {}
  
  assignValue() {
    const SubscribeObservable = new Observable((observer) => {
      observer.next('Angular');
    });
    return SubscribeObservable;
  }
}
