import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimsPayScaleComponent } from './pims-pay-scale.component';

describe('PimsPayScaleComponent', () => {
  let component: PimsPayScaleComponent;
  let fixture: ComponentFixture<PimsPayScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimsPayScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimsPayScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
