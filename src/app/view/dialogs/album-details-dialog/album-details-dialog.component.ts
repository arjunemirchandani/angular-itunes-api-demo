import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {AlbumVO} from "../../../control/vo/album-vo";

@Component({
  selector: 'app-album-details-dialog',
  templateUrl: './album-details-dialog.component.html',
  styleUrls: ['./album-details-dialog.component.sass']
})
export class AlbumDetailsDialogComponent implements OnInit {
  public album!: AlbumVO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.album = this.data.album;
  }
}
