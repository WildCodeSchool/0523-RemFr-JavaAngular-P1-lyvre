import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReadingsComponent } from './my-readings.component';

describe('MyReadingsComponent', () => {
  let component: MyReadingsComponent;
  let fixture: ComponentFixture<MyReadingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReadingsComponent]
    });
    fixture = TestBed.createComponent(MyReadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
