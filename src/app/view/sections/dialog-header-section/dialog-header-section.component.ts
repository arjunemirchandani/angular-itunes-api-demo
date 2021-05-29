import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-header-section',
  templateUrl: './dialog-header-section.component.html',
  styleUrls: ['./dialog-header-section.component.sass']
})
export class DialogHeaderSectionComponent implements OnInit {
  @Input() dialogTitle!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
