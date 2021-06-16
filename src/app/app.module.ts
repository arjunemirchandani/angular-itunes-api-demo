import {NgModule} from '@angular/core';
import {environment} from "../environments/environment";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
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
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppDrawerComponent} from './view/sections/app-drawer/app-drawer.component';
import {GridPageComponent} from './view/pages/grid-page/grid-page.component';
import {AlbumTableComponent} from "./view/sections/album-table/album-table.component";
import {TablePageComponent} from './view/pages/table-page/table-page.component';
import {pageViewsReducer} from "./model/pageViews/page-views.reducer";
import {albumsReducer} from "./model/albums/albums.reducer";
import {favoritesReducer} from "./model/favorites/favorites.reducer";
import {appMenuReducer} from "./model/appMenu/app-menu.reducer";

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    FooterSectionComponent,
    AboutPageComponent,
    ContactPageComponent,
    AlbumDetailsDialogComponent,
    DialogHeaderSectionComponent,
    AlbumTableComponent,
    AppDrawerComponent,
    GridPageComponent,
    TablePageComponent
  ],
  imports: [
    StoreModule.forRoot({
      appMenu: appMenuReducer,
      albums: albumsReducer,
      favorites: favoritesReducer,
      pageViews: pageViewsReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !environment.production
    }),
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
    MatSnackBarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatRadioModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
