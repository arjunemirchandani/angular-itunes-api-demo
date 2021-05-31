import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Title} from "@angular/platform-browser";
import {PageViewsService} from "../../../control/services/pageViews/page-views.service";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {

  constructor(private browserTitle: Title,
              private pageViewsService: PageViewsService,) {
  }

  ngOnInit(): void {
    this.browserTitle.setTitle(`About | ${environment.appTitle}`);
    this.pageViewsService.increment();
  }
}
