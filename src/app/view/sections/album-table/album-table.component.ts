import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {AppUtils} from "../../../control/utils/app/app-utils";
import {Album} from "../../../model/albums/albums.model";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {FavoritesService} from "../../../control/services/favorites/favorites.service";
import {favorites} from "../../../model/favorites/favorites.selectors";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.sass']
})
export class AlbumTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  favorites$: Observable<string[]> = this.store.select(favorites.projector);
  favorites!: Array<string>;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayedColumns: any[] = ['favorite', 'albumArt', 'name', 'artist', 'trackCount', 'price', 'releaseDate', 'details'];
  public pageSizeOptions = [5, 10, 25, 50, 100];
  public pageSize = 25;
  public pageIndex = 0;
  public length = 0;
  public formGroup!: FormGroup;

  constructor(private dialog: MatDialog,
              private readonly store: Store<{ favorites: Array<string> }>,
              private favoritesService: FavoritesService,
              private formBuilder: FormBuilder) {
  }

  @Input()
  set albums(albums: any) {
    if (albums !== undefined) {
      AppUtils.consoleLog("Albums Table Refreshed:", albums);
      this.dataSource.data = albums;
    }
  }

  ngOnInit(): void {
    this.favorites$.subscribe(favorites => this.favorites = favorites);
    this.formGroup = this.formBuilder.group({
      searchText: new FormControl(''),
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openAlbumDetailsDialog(album: Album) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }

  filterResults(searchText: string) {
    this.dataSource.filter = searchText;
  }

  toggleFavorite(album: any) {
    this.favoritesService.toggleFavorite(album);
  }

  isFavorite(favorites: string[], id: string) {
    return favorites.includes(id);
  }
}
