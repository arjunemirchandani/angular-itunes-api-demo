import {Component, Input, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.sass']
})
export class TrackTableComponent {
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort!: MatSort;
  displayedColumns: any[] = ['title', 'artist'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  pageSizeOptions = [0, 1, 2, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000];
  pageSize = 5;
  pageIndex = 0;
  length = 0;

  protected _tracks!: any[];

  @Input()
  set tracks(data: any[]) {
    this._tracks = data;
    this.dataSource.data = this._tracks;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(data);
  }
}
