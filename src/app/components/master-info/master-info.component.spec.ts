import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterInfoComponent } from './master-info.component';

describe('MasterInfoComponent', () => {
  let component: MasterInfoComponent;
  let fixture: ComponentFixture<MasterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
