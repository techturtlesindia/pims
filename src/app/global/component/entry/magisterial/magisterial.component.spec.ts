import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagisterialComponent } from './magisterial.component';

describe('MagisterialComponent', () => {
  let component: MagisterialComponent;
  let fixture: ComponentFixture<MagisterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagisterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagisterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
