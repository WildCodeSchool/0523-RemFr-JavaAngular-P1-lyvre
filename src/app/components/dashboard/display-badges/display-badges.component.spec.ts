import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBadgesComponent } from './display-badges.component';

describe('DisplayBadgesComponent', () => {
  let component: DisplayBadgesComponent;
  let fixture: ComponentFixture<DisplayBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayBadgesComponent]
    });
    fixture = TestBed.createComponent(DisplayBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
