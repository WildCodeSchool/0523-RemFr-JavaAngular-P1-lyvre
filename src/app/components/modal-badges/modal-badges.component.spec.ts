import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBadgesComponent } from './modal-badges.component';

describe('ModalBadgesComponent', () => {
  let component: ModalBadgesComponent;
  let fixture: ComponentFixture<ModalBadgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBadgesComponent]
    });
    fixture = TestBed.createComponent(ModalBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
