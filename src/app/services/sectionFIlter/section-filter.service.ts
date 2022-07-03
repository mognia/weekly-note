import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SectionFilterService {
  filterObservable = new BehaviorSubject<number>(0)
  constructor() { }
  setFilter(id:number) {
    this.filterObservable.next(id)
  }
  getFilter() {
    return this.filterObservable.asObservable();
  }
}
