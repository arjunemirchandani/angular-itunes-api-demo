import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {AlbumVO} from "../../../control/vo/album-vo";
import {MatDialog} from "@angular/material/dialog";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";
import {AppUtils} from "../../../control/util/app-utils";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.sass']
})
export class TrackTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayedColumns: any[] = ['favorite', 'albumArt', 'name', 'artist', 'trackCount', 'price', 'releaseDate', 'details'];
  public pageSizeOptions = [0, 1, 5, 10, 25, 50, 100];
  public pageSize = 25;
  public pageIndex = 0;
  public length = 0;
  public formGroup!: FormGroup;

  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      searchText: new FormControl(''),
    });
  }

  @Input()
  set tracks(tracks: any[]) {
    if (tracks !== undefined) {
      AppUtils.consoleLog("Track Table Refreshed:", tracks);
      this.dataSource.data = tracks;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  openAlbumDetailsDialog(album: AlbumVO) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }

  filterResults(searchText: string) {
    this.dataSource.filter = searchText;
  }

}
