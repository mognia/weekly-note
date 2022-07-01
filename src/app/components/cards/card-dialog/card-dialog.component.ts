import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Note} from "../../../app.component";
interface dataDialog {
  note : Note
}
@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {
  note : Note | undefined;
  constructor(    public dialogRef: MatDialogRef<CardDialogComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: dataDialog,) { }

  ngOnInit(): void {
    this.note = this.data.note;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
