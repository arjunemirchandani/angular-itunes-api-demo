import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {AppUtils} from "../../../control/utils/app/app-utils";
import {Album, IAlbum} from "../../../model/albums/albums.model";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.sass']
})
export class AlbumTableComponent implements OnInit, AfterViewInit {
  @Input() favorites!: Array<string> | null;
  @Output() toggleFavorites: EventEmitter<IAlbum> = new EventEmitter<IAlbum>();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public formGroup!: FormGroup;
  public displayedColumns: any[] = ['favorite', 'albumArt', 'name', 'artist', 'trackCount', 'price', 'releaseDate', 'details'];
  public pageSizeOptions = [5, 10, 25, 50, 100];
  public pageSize = 25;
  public pageIndex = 0;
  public length = 0;

  @Input()
  set albums(albums: any) {
    if (albums !== undefined) {
      AppUtils.consoleLog("Albums Table Refreshed:", albums);
      this.dataSource.data = albums;
    }
  }

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
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

  isFavorite(favorites: string[] | null, id: string) {
    return favorites?.includes(id);
  }
}
