import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalqualificationComponent } from './additionalqualification.component';

describe('AdditionalqualificationComponent', () => {
  let component: AdditionalqualificationComponent;
  let fixture: ComponentFixture<AdditionalqualificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalqualificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalqualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
