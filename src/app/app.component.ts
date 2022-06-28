import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public apiService : ApiService) { }
  labels : any | undefined;
  ngOnInit(): void {
    // retrieve all labels
    this.apiService.getLabels().subscribe((data) => {
      this.labels = data
    })
  }

}
