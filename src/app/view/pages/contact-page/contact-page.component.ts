import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.sass']
})
export class ContactPageComponent implements OnInit {

  constructor(private browserTitle: Title) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`Contact | ${environment.appTitle}`)
  }
}
