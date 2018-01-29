import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateOrderComponent } from './rate-order.component';

describe('RateOrderComponent', () => {
  let component: RateOrderComponent;
  let fixture: ComponentFixture<RateOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
