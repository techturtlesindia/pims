import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeigntrainingComponent } from './foreigntraining.component';

describe('ForeigntrainingComponent', () => {
  let component: ForeigntrainingComponent;
  let fixture: ComponentFixture<ForeigntrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeigntrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeigntrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
