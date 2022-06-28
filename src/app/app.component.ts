import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

interface Note {
  id: number;
  title: string;
  summary?: string;
  labels: number[];
  startDate: number | string;
  endDate: number | string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels: any | undefined;
  notes: any[] | undefined
  constructor(public apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getLabels()
    this.getNotes()
  }

  getLabels() {
    // retrieve all labels
    this.apiService.getLabels().subscribe((data) => {
      this.labels = data
    });
  }

  getNotes() {
    // retrieve all Notes
    this.apiService.getNotes().subscribe((data: any) => {
      this.notes = data['notes'];
      this.beautifyNotes()
    });
  }

  beautifyNotes() {
    this.notes = this.notes?.map((note: Note) => {
      if (typeof note.startDate === 'number') {
        note.startDate = this.convertDate(note.startDate)
      }
      if (typeof note.endDate === 'number') {
        note.endDate = this.convertDate(note.endDate)
      }
      return note
    });
  }

  convertDate(UNIX_timestamp: number) {
    // converting UNIX timestamp to Date
    const a = new Date(UNIX_timestamp * 1000);
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const month = months[a.getMonth()]
    const date = a.getDate();
    return `${date}/${month}`;
  }
}
