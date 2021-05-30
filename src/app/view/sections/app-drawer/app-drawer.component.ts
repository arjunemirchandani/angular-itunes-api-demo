import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-app-drawer',
  templateUrl: './app-drawer.component.html',
  styleUrls: ['./app-drawer.component.sass']
})
export class AppDrawerComponent {
  @Output() toggleDrawer: EventEmitter<any> = new EventEmitter<any>();
}
