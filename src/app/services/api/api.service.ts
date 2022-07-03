import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Note} from "../../app.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api = 'https://61ee5f30d593d20017dbad98.mockapi.io/pinguin/api'
  constructor(private httpClient: HttpClient) { }

  getNotes() {
    return this.httpClient.get(`${this.api}/notes`)
  }
  getLabels() {
    return this.httpClient.get(`${this.api}/noteLabels`)
  }
  updateNote(id:number, note:Note) {
    return this.httpClient.put(`${this.api}/notes/${id}`,note)
  }
}
