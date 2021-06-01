import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {AppUtils} from "../../../control/utils/app/app-utils";
import {AlbumVO} from "../../../control/vos/album/album-vo";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.sass']
})
export class AlbumTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayedColumns: any[] = ['favorite', 'albumArt', 'name', 'artist', 'trackCount', 'price', 'releaseDate', 'details'];
  public pageSizeOptions = [5, 10, 25, 50, 100];
  public pageSize = 25;
  public pageIndex = 0;
  public length = 0;
  public formGroup!: FormGroup;

  constructor(private dialog: MatDialog,
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
    this.formGroup = this.formBuilder.group({
      searchText: new FormControl(''),
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openAlbumDetailsDialog(album: AlbumVO) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }

  filterResults(searchText: string) {
    this.dataSource.filter = searchText;
  }
}
