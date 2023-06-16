import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarComponent } from './chartBar.component';

describe('ChartComponent', () => {
  let component: ChartBarComponent;
  let fixture: ComponentFixture<ChartBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartBarComponent]
    });
    fixture = TestBed.createComponent(ChartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
