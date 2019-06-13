import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareBearComponent } from './care-bear.component';

describe('CareBearComponent', () => {
  let component: CareBearComponent;
  let fixture: ComponentFixture<CareBearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareBearComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareBearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
