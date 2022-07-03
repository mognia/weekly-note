import { Component, OnInit } from '@angular/core';
import {ResponsiveService} from "../../services/responsive/responsive.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
   isResponsive: boolean = false;

  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.responsiveService.resizeObservable$.subscribe(data => {
      this.isResponsive = data < 770;
    });
  }

}
