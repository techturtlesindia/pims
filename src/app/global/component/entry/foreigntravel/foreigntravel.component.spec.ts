import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeigntravelComponent } from './foreigntravel.component';

describe('ForeigntravelComponent', () => {
  let component: ForeigntravelComponent;
  let fixture: ComponentFixture<ForeigntravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeigntravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeigntravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
