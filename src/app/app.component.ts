import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api/api.service";
import {concatMap, switchMap} from "rxjs/operators";
import {ResponsiveService} from "./services/responsive/responsive.service";
import {SectionFilterService} from "./services/sectionFIlter/section-filter.service";

export interface Note {
  id: number;
  title: string;
  summary?: string;
  labels: number[];
  startDate:  string;
  endDate:  string;
}
export interface labelsArr {
  id: number;
  text: string;
  notes:Note[];
  hide:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels: labelsArr | any ;
  notes: any[] = []
  days : number[] = []
  isNoteLabelsAdded: boolean = false;
  constructor(
    public apiService: ApiService,
    public responsiveService: ResponsiveService,
    public sectionFilter : SectionFilterService) {
  }

  ngOnInit() {
    this.getLabels();
    this.sectionFilter.getFilter().subscribe(id => {
        this.filterSections(id)
    })
  }

  getLabels() {
    // retrieve all labels
    this.apiService.getLabels().subscribe((data) => {
      this.labels = data;
      this.getNotes();
    });
  }

  getNotes() {
    // retrieve all Notes
    this.apiService.getNotes().subscribe((data: any) => {
      this.notes = data['notes'];
      this.beautifyNotes()
      this.addNoteToLabel()
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
  addNoteToLabel() {
    // in this function we find each label's notes and add to their label's object
    for (let i = 0; i < this.labels?.length; i++) {
      for (let j = 0; j < this.notes?.length; j++) {
        if (this.notes[j].labels.includes(this.labels[i].id)){
          if (!this.labels[i].notes) {
            this.labels[i].notes = []
          }
          this.labels[i].notes.push(this.notes[j])
        }
      }
    }
   return   this.isNoteLabelsAdded = true;
  }
  filterSections(id:number) {
    this.labels = this.labels?.filter((label:labelsArr) => {
      if (id) {
      label.hide = label.id !== id;
      }else {
        label.hide = false;
      }
      return this.labels
    });
  }
}
