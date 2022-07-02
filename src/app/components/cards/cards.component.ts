import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../app.component";
import {MatDialog} from "@angular/material/dialog";
import {CardDialogComponent} from "./card-dialog/card-dialog.component";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
@Input() note: Note | undefined;
  duration : number=1;
  constructor(
    public dialog: MatDialog,
    public apiService:ApiService) { }

  ngOnInit(): void {
    this.calculateDuration()
  }
  calculateDuration(){
    let endDay = typeof this.note?.endDate==='string' ? parseInt(this.note?.endDate.split('/')[0]) : 0;
    let startDay = typeof this.note?.startDate==='string' ? parseInt(this.note?.startDate.split('/')[0]):1;
    if (endDay> startDay) {
      this.duration = endDay - startDay
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      data: {note: this.note},
    });

    dialogRef.afterClosed().subscribe((result:Note) => {
      this.apiService.updateNote(result.id,result).subscribe(data => {
        console.log(data)
      })
    });
  }
}
