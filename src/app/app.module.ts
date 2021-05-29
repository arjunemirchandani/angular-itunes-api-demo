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
import {AboutPageComponent} from './view/pages/about-page/about-page.component';
import {ContactPageComponent} from './view/pages/contact-page/contact-page.component';
import {MatButtonModule} from "@angular/material/button";
import {NgxSpinnerModule} from "ngx-spinner";
import {AlbumDetailsDialogComponent} from './view/dialogs/album-details-dialog/album-details-dialog.component';
import {DialogHeaderSectionComponent} from './view/sections/dialog-header-section/dialog-header-section.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TrackTableComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    AboutPageComponent,
    ContactPageComponent,
    AlbumDetailsDialogComponent,
    DialogHeaderSectionComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
