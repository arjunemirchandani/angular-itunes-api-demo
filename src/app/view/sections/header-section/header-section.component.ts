import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.sass']
})
export class HeaderSectionComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();
}
