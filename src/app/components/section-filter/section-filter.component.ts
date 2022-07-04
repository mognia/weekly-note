import {Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {SectionFilterService} from "../../services/sectionFIlter/section-filter.service";
import {ApiService} from "../../services/api/api.service";

@Component({
  selector: 'app-section-filter',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent implements OnInit {
   labels:any;

  constructor(
    public apiService: ApiService,
    public sectionFilter : SectionFilterService
  ) { }

  ngOnInit(): void {
    this.getLabels()
  }
  selectSection(sectionId:number) {
    this.sectionFilter.setFilter(sectionId)
  }
  getLabels() {
    // retrieve all labels
    this.apiService.getLabels().subscribe((data) => {
      this.labels = data;
    });
  }
}
