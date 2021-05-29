import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogHeaderSectionComponent} from './dialog-header-section.component';

describe('DialogHeaderSectionComponent', () => {
  let component: DialogHeaderSectionComponent;
  let fixture: ComponentFixture<DialogHeaderSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogHeaderSectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
