import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-labels-section',
  templateUrl: './labels-section.component.html',
  styleUrls: ['./labels-section.component.scss']
})
export class LabelsSectionComponent implements OnInit {
  @Input() text: string | undefined
  @Input() id: number | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
