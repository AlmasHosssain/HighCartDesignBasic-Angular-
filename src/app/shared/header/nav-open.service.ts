import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavOpenService {

  constructor() { }
  public toggleObj$ = new BehaviorSubject<boolean>(null)
}
