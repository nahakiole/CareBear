import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterCheckPage } from './after-check.page';

describe('AfterCheckPage', () => {
  let component: AfterCheckPage;
  let fixture: ComponentFixture<AfterCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterCheckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
