import {NgModule} from '@angular/core';
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
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatStepperModule} from "@angular/material/stepper";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppDrawerComponent} from './view/sections/app-drawer/app-drawer.component';
import {GridPageComponent} from './view/pages/grid-page/grid-page.component';
import {AlbumTableComponent} from "./view/sections/album-table/album-table.component";
import {TablePageComponent} from './view/pages/table-page/table-page.component';
import {StoreModule} from "@ngrx/store";
import {pageViewsReducer} from "./state/pageViews/page-views.reducer";

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
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      pageViews: pageViewsReducer
    }),
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
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSliderModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
