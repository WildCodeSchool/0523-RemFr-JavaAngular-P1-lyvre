import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToMapComponent } from './go-to-map.component';

describe('GoToMapComponent', () => {
  let component: GoToMapComponent;
  let fixture: ComponentFixture<GoToMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoToMapComponent]
    });
    fixture = TestBed.createComponent(GoToMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
