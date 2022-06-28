import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  daysObservable = new BehaviorSubject<number[]>([])
  constructor() { }
  getDays() {
    return this.daysObservable.asObservable();
  }
  setDays(days:number[]) {
    this.daysObservable.next(days)
  }
}
