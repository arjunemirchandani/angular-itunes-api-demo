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
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayedColumns: any[] = ['name', 'artist', 'trackCount', 'price', 'releaseDate'];
  public pageSizeOptions = [0, 1, 5, 10, 25, 50, 100];
  public pageSize = 25;
  public pageIndex = 0;
  public length = 0;

  @Input()
  set tracks(tracks: any[]) {
    console.log("Track Table Refreshed:", tracks);
    this.dataSource.data = tracks;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
