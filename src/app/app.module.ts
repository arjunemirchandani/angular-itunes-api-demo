import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {AppComponent} from './app.component';
import {HomePageComponent} from './view/pages/home-page/home-page.component';
import {HttpClientModule} from "@angular/common/http";
import {TrackTableComponent} from './view/tables/track-table/track-table.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {HeaderSectionComponent} from './view/sections/header-section/header-section.component';
import {FooterSectionComponent} from './view/sections/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TrackTableComponent,
    HeaderSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
