import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimsRankComponent } from './pims-rank.component';

describe('PimsRankComponent', () => {
  let component: PimsRankComponent;
  let fixture: ComponentFixture<PimsRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimsRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimsRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
