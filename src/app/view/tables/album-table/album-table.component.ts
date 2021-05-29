import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {AppUtils} from "../../../control/util/app-utils";
import {AlbumVO} from "../../../control/vo/album-vo";
import {AlbumDetailsDialogComponent} from "../../dialogs/album-details-dialog/album-details-dialog.component";

@Component({
  selector: 'app-album-table',
  templateUrl: './album-table.component.html',
  styleUrls: ['./album-table.component.sass']
})
export class AlbumTableComponent implements OnInit {
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

  @Input()
  set tracks(tracks: any[]) {
    if (tracks !== undefined) {
      AppUtils.consoleLog("Track Table Refreshed:", tracks);
      this.dataSource.data = tracks;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      searchText: new FormControl(''),
    });
  }

  openAlbumDetailsDialog(album: AlbumVO) {
    this.dialog.open(AlbumDetailsDialogComponent, {data: {album}, panelClass: ['standard-dialog']})
  }

  filterResults(searchText: string) {
    this.dataSource.filter = searchText;
  }

}
