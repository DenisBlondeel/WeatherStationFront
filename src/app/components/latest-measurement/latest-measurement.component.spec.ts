import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestMeasurementComponent } from './latest-measurement.component';

describe('LatestMeasurementComponent', () => {
  let component: LatestMeasurementComponent;
  let fixture: ComponentFixture<LatestMeasurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestMeasurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
