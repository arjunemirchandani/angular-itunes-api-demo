import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AlbumDetailsDialogComponent} from './album-details-dialog.component';

describe('AlbumDetailsDialogComponent', () => {
  let component: AlbumDetailsDialogComponent;
  let fixture: ComponentFixture<AlbumDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumDetailsDialogComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
