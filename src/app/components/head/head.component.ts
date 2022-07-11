import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ResponsiveService} from "../../services/responsive/responsive.service";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {
   isResponsive: boolean = false;
    @Input() labels:any;
  constructor(public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    this.responsiveService.resizeObservable$.subscribe(data => {
      this.isResponsive = (data <= 768);
      console.log(this.isResponsive , 'head')
    });
  }

}
