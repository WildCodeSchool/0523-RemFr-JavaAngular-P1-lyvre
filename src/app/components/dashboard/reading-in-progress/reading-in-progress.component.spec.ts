import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingInProgressComponent } from './reading-in-progress.component';

describe('ReadingInProgressComponent', () => {
  let component: ReadingInProgressComponent;
  let fixture: ComponentFixture<ReadingInProgressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadingInProgressComponent]
    });
    fixture = TestBed.createComponent(ReadingInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
