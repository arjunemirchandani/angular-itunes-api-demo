import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Album} from "../../../model/albums/albums.model";

@Component({
  selector: 'app-album-details-dialog',
  templateUrl: './album-details-dialog.component.html',
  styleUrls: ['./album-details-dialog.component.sass']
})
export class AlbumDetailsDialogComponent implements OnInit {
  public album!: Album;

  /**
   * constructor
   * @param data
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    if (this.data) {
      this.album = this.data.album;
    }
  }
}
